import React, {useCallback, useMemo} from 'react';

import {AuthService} from '../models/auth-service';
import {AuthContext, AuthContextApi} from '../contexts/auth-context';

type AuthProviderProps = {
  authService: AuthService;
  cacheStorage: Storage;
  children: React.ReactNode;
};

const CACHE_STORAGE_KEY_NAME = 'authToken';

export const AuthProvider: React.FC<AuthProviderProps> = ({authService, cacheStorage,children}) => {
  const token = cacheStorage.getItem(CACHE_STORAGE_KEY_NAME);
  const login = useCallback(
    async (userName: string, password: string) => {
      try {
       const {token} = await authService.login(userName, password);
       if (token) {
         cacheStorage.setItem(CACHE_STORAGE_KEY_NAME, token);
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
