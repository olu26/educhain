import Array "mo:base/Array";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor NFTCertificates {
  type Certificate = {
    id: Text;
    studentId: Text;
    certificateType: Text;
    title: Text;
    description: Text;
    issuer: Text;
    issueDate: Int;
    metadata: Text; // JSON string
    tokenId: ?Text;
    mintedAt: ?Int;
    mintedBy: ?Text;
    isMinted: Bool;
    ipfsHash: ?Text;
    blockchainTxHash: ?Text;
  };

  type MintRequest = {
    certificateId: Text;
    recipientAddress: Text;
    metadata: Text;
  };

  stable var certificates : [Certificate] = [];
  stable var nextTokenId : Nat = 1;

  public func createCertificate(
    id: Text,
    studentId: Text,
    certificateType: Text,
    title: Text,
    description: Text,
    issuer: Text,
    metadata: Text
  ) : async Bool {
    let certificate = {
      id = id;
      studentId = studentId;
      certificateType = certificateType;
      title = title;
      description = description;
      issuer = issuer;
      issueDate = Time.now();
      metadata = metadata;
      tokenId = null;
      mintedAt = null;
      mintedBy = null;
      isMinted = false;
      ipfsHash = null;
      blockchainTxHash = null;
    };
    certificates := Array.append(certificates, [certificate]);
    return true;
  };

  public func mintNFT(certificateId: Text, recipientAddress: Text) : async Result.Result<Text, Text> {
    switch (Array.find<Certificate>(certificates, func(c) { c.id == certificateId })) {
      case (?cert) {
        if (cert.isMinted) {
          return #err("Certificate already minted");
        };
        
        let tokenId = "NFT-" # Nat.toText(nextTokenId);
        nextTokenId += 1;
        
        let updatedCert = {
          id = cert.id;
          studentId = cert.studentId;
          certificateType = cert.certificateType;
          title = cert.title;
          description = cert.description;
          issuer = cert.issuer;
          issueDate = cert.issueDate;
          metadata = cert.metadata;
          tokenId = ?tokenId;
          mintedAt = ?Time.now();
          mintedBy = ?recipientAddress;
          isMinted = true;
          ipfsHash = ?"QmX7Y8Z9..."; // Placeholder IPFS hash
          blockchainTxHash = ?"0xabc123..."; // Placeholder transaction hash
        };
        
        certificates := Array.map<Certificate, Certificate>(certificates, func(c) {
          if (c.id == certificateId) { updatedCert } else { c }
        });
        
        return #ok(tokenId);
      };
      case null {
        return #err("Certificate not found");
      };
    }
  };

  public query func getCertificatesByStudent(studentId: Text) : async [Certificate] {
    Array.filter<Certificate>(certificates, func(c) { c.studentId == studentId })
  };

  public query func getCertificateById(id: Text) : async ?Certificate {
    Array.find<Certificate>(certificates, func(c) { c.id == id })
  };

  public query func getAllCertificates() : async [Certificate] {
    certificates
  };

  public query func getMintedCertificates() : async [Certificate] {
    Array.filter<Certificate>(certificates, func(c) { c.isMinted })
  };
}