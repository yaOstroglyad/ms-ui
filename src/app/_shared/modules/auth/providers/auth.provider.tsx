import React, {useCallback, useMemo} from 'react';

import {AuthState} from '../models/auth.state';
import {AuthService} from '../models/auth-service';
import {AuthContext, AuthContextApi} from '../contexts/auth-context';

type AuthProviderProps = {
  authService: AuthService;
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({authService,children}) => {
  const [authState, setAuthState] = React.useState<AuthState>({} as AuthState);
  const login = useCallback(
    async (userName: string, password: string) => {
      try {
       const {token} = await authService.login(userName, password);
       if (token) {
         setAuthState({token, isLogged: Boolean(token)});
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
      state: authState,
      login,
      logout,
    }),
    [
      authState,
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
