import React, {useCallback, useMemo, useState} from 'react';

import {AuthService} from '../models/auth-service';
import {AuthContext, AuthContextApi} from '../contexts/auth-context';

type AuthProviderProps = {
  authService: AuthService;
  cacheStorage: Storage;
  children: React.ReactNode;
};

const CACHE_STORAGE_KEY_NAME = 'authToken';

export const AuthProvider: React.FC<AuthProviderProps> = ({authService, cacheStorage,children}) => {
  const [token, setToken] = useState(() => cacheStorage.getItem(CACHE_STORAGE_KEY_NAME));
  const login = useCallback(
    async (userName: string, password: string) => {
      try {
       const {token: tokenResponse} = await authService.login(userName, password);
       if (tokenResponse) {
         cacheStorage.setItem(CACHE_STORAGE_KEY_NAME, tokenResponse);
         setToken(tokenResponse);
       }
      } catch (error) {}
    },
        [authService]
  );
  const logout = useCallback(
    () => authService.logout(),
    [authService],
  );
  const contextValue: AuthContextApi = useMemo(
    () => ({
      state: {token, isLogged: Boolean(token)},
      login,
      logout,
    }),
    [
      token,
      login,
      logout,
    ],
  );
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
