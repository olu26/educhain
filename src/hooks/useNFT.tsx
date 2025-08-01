import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { NFTCertificate, MintingRequest } from '../types';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';

type IDLType = {
  Text: any;
  Record: (fields: Record<string, any>) => any;
  Service: (methods: Record<string, any>) => any;
  Func: (args: any[], ret: any[], annotations: string[]) => any;
  Opt: (type: any) => any;
  Vec: (type: any) => any;
  Bool: any;
  Int: any;
  Variant: (variants: Record<string, any>) => any;
};

// NFT Certificates canister interface
const nftCertificatesIdlFactory = ({ IDL }: { IDL: IDLType }) => {
  const Certificate = IDL.Record({
    id: IDL.Text,
    studentId: IDL.Text,
    certificateType: IDL.Text,
    title: IDL.Text,
    description: IDL.Text,
    issuer: IDL.Text,
    issueDate: IDL.Int,
    metadata: IDL.Text,
    tokenId: IDL.Opt(IDL.Text),
    mintedAt: IDL.Opt(IDL.Int),
    mintedBy: IDL.Opt(IDL.Text),
    isMinted: IDL.Bool,
    ipfsHash: IDL.Opt(IDL.Text),
    blockchainTxHash: IDL.Opt(IDL.Text),
  });

  const Result = IDL.Variant({
    ok: IDL.Text,
    err: IDL.Text,
  });

  return IDL.Service({
    createCertificate: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
    mintNFT: IDL.Func([IDL.Text, IDL.Text], [Result], []),
    getCertificatesByStudent: IDL.Func([IDL.Text], [IDL.Vec(Certificate)], ['query']),
    getCertificateById: IDL.Func([IDL.Text], [IDL.Opt(Certificate)], ['query']),
    getAllCertificates: IDL.Func([], [IDL.Vec(Certificate)], ['query']),
    getMintedCertificates: IDL.Func([], [IDL.Vec(Certificate)], ['query']),
  });
};

interface NFTContextType {
  certificates: NFTCertificate[];
  mintNFT: (certificateId: string, recipientAddress: string) => Promise<string | null>;
  createCertificate: (certificate: Omit<NFTCertificate, 'id' | 'isMinted'>) => Promise<boolean>;
  getCertificatesByStudent: (studentId: string) => Promise<NFTCertificate[]>;
  isLoading: boolean;
}

const NFTContext = createContext<NFTContextType | undefined>(undefined);

const nftCertificatesCanisterId = process.env.REACT_APP_NFT_CERTIFICATES_CANISTER_ID || 'nft-certificates-canister-id';

export const useNFT = () => {
  const context = useContext(NFTContext);
  if (context === undefined) {
    throw new Error('useNFT must be used within an NFTProvider');
  }
  return context;
};

export const NFTProvider = ({ children }: { children: ReactNode }) => {
  const [certificates, setCertificates] = useState<NFTCertificate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState<any>(null);

  useEffect(() => {
    const initNFT = async () => {
      try {
        const authClient = await AuthClient.create();
        if (await authClient.isAuthenticated()) {
          const identity = authClient.getIdentity();
          const agent = new HttpAgent({ identity });
          
          const nftActor = Actor.createActor(nftCertificatesIdlFactory, {
            agent,
            canisterId: nftCertificatesCanisterId,
          });
          
          setActor(nftActor);
        }
      } catch (error) {
        console.error('Failed to initialize NFT service:', error);
      }
    };
    
    initNFT();
  }, []);

  const createCertificate = async (certificate: Omit<NFTCertificate, 'id' | 'isMinted'>): Promise<boolean> => {
    if (!actor) return false;
    
    setIsLoading(true);
    try {
      const id = `cert-${Date.now()}`;
      const metadata = JSON.stringify(certificate.metadata);
      
      const success = await actor.createCertificate(
        id,
        certificate.studentId,
        certificate.certificateType,
        certificate.title,
        certificate.description,
        certificate.issuer,
        metadata
      );
      
      if (success) {
        // Refresh certificates list
        await getCertificatesByStudent(certificate.studentId);
      }
      
      return success;
    } catch (error) {
      console.error('Failed to create certificate:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const mintNFT = async (certificateId: string, recipientAddress: string): Promise<string | null> => {
    if (!actor) return null;
    
    setIsLoading(true);
    try {
      const result = await actor.mintNFT(certificateId, recipientAddress);
      
      if ('ok' in result) {
        // Refresh certificates list
        const updatedCerts = await actor.getAllCertificates();
        setCertificates(updatedCerts);
        return result.ok;
      } else {
        throw new Error(result.err);
      }
    } catch (error) {
      console.error('Failed to mint NFT:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getCertificatesByStudent = async (studentId: string): Promise<NFTCertificate[]> => {
    if (!actor) return [];
    
    try {
      const certs = await actor.getCertificatesByStudent(studentId);
      setCertificates(certs);
      return certs;
    } catch (error) {
      console.error('Failed to fetch certificates:', error);
      return [];
    }
  };

  const value = {
    certificates,
    mintNFT,
    createCertificate,
    getCertificatesByStudent,
    isLoading,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
};