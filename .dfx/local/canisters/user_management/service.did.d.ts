import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface User {
  'id' : string,
  'name' : string,
  'role' : string,
  'email' : string,
}
export interface _SERVICE {
  'getAllUsers' : ActorMethod<[], Array<User>>,
  'getUserById' : ActorMethod<[string], [] | [User]>,
  'registerUser' : ActorMethod<[string, string, string, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
