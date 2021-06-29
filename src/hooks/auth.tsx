import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';

import * as AuthSession from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

import { api } from '../services/api';
import { COLLECTION_APPOINTMENTS, COLLECTION_USERS } from '../configs/database';

interface IUser {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

interface IAuthContextData {
  user: IUser;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface IAuthProviderProps {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession
        .startAsync({ authUrl }) as AuthorizationResponse;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split('  ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar')
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as IUser);
    await AsyncStorage.removeItem(COLLECTION_USERS)
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as IUser;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      loading,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}