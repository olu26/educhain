import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User } from '../types';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { idlFactory as userManagementIdlFactory } from '../ic/user_management/user_management.did.js';

type IDLType = {
  Text: any;
  Record: (fields: Record<string, any>) => any;
  Service: (methods: Record<string, any>) => any;
  Func: (args: any[], ret: any[], annotations: string[]) => any;
  Opt: (type: any) => any;
  Vec: (type: any) => any;
  Bool: any;
};

// Temporary inline idlFactory for userManagement canister
const userManagementIdlFactory = ({ IDL }: { IDL: IDLType }) => {
  const User = IDL.Record({
    id: IDL.Text,
    email: IDL.Text,
    role: IDL.Text,
    name: IDL.Text,
  });
  return IDL.Service({
    registerUser: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
    getUserById: IDL.Func([IDL.Text], [IDL.Opt(User)], ['query']),
    getAllUsers: IDL.Func([], [IDL.Vec(User)], ['query']),
  });
};

interface AuthContextType {
  user: User | null;
  login: (email?: string, password?: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User>) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* eslint-disable no-undef */
const userManagementCanisterId = process.env.REACT_APP_USER_MANAGEMENT_CANISTER_ID || 'uxrrr-q7777-77774-qaaaq-cai'; // Replace with your actual canister ID after deployment

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
declare const process: any;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [actor, setActor] = useState<unknown>(null);


  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      if (await client.isAuthenticated()) {
        const identity = client.getIdentity();
        const agent = new HttpAgent({ identity });
        const userManagementActor = Actor.createActor(userManagementIdlFactory, {
          agent,
          canisterId: userManagementCanisterId,
        });
        setActor(userManagementActor);
        // Fetch user info from canister or set user accordingly
        // For demo, setting a placeholder user
        setUser({
          id: 'ic-user',
          email: 'icuser@educhain.com',
          role: 'student',
          name: 'ICP User',
          avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`
        });
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

const login = async (email?: string, _password?: string): Promise<boolean> => {
    if (!authClient) return false;
    setIsLoading(true);
    try {
      // For demo purposes, simulate login based on email
      let role: 'student' | 'school' | 'parent' | 'admin' = 'student';
      if (email) {
        if (email.includes('admin')) role = 'admin';
        else if (email.includes('school')) role = 'school';
        else if (email.includes('parent')) role = 'parent';
        else if (email.includes('student')) role = 'student';
      }
      await authClient.login({
        onSuccess: async () => {
          const identity = authClient.getIdentity();
          const agent = new HttpAgent({ identity });
          const userManagementActor = Actor.createActor(userManagementIdlFactory, {
            agent,
            canisterId: userManagementCanisterId,
          });
          setActor(userManagementActor);
          // Set user based on email and role for demo
          setUser({
            id: 'ic-user',
            email: email || 'icuser@educhain.com',
            role,
            name: role.charAt(0).toUpperCase() + role.slice(1) + ' User',
            avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`
          });
          setIsLoading(false);
        },
      });
      return true;
    } catch {
      setIsLoading(false);
      return false;
    }
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    if (!actor) return false;
    setIsLoading(true);
    try {
      // @ts-ignore
      const success = await actor.registerUser(
        userData.id || '',
        userData.email || '',
        userData.role || '',
        userData.name || ''
      );
      if (success) {
        setUser(userData as User);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return false;
    } catch {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    if (authClient) {
      authClient.logout();
    }
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    register,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
