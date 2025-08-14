import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

const IC_HOST = process.env.IC_HOST || 'http://127.0.0.1:8000';
const isDevelopment = process.env.NODE_ENV !== 'production';

// Create HTTP agent
export const agent = new HttpAgent({
  host: IC_HOST,
  ...(isDevelopment && { fetch: globalThis.fetch })
});

// Enable development mode
if (isDevelopment) {
  agent.fetchRootKey().catch(err => {
    console.warn('Unable to fetch root key. Check to ensure that your local replica is running');
    console.error(err);
  });
}

// Canister IDs from environment
export const CANISTER_IDS = {
  studentRecords: process.env.IC_CANISTER_ID_STUDENT_RECORDS || 'ryjl3-tyaaa-aaaaa-aaaba-cai',
  userManagement: process.env.IC_CANISTER_ID_USER_MANAGEMENT || 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  nftCertificates: process.env.IC_CANISTER_ID_NFT_CERTIFICATES || 'r7inp-6aaaa-aaaaa-aaabq-cai',
};

// Generic actor creation function
export const createActor = (idlFactory: any, canisterId: string) => {
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: Principal.fromText(canisterId),
  });
};
