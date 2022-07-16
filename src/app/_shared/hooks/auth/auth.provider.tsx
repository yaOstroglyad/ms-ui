import React, {useCallback, useMemo} from 'react';

import {AuthState} from './auth.state';
import {AuthService} from './auth-service.interface';

export interface AuthContext {
  readonly state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContext>({} as AuthContext);

type AuthProviderProps = {
  authService: AuthService;
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({authService,children}) => {
  const [authState, setAuthState] = React.useState<AuthState>({} as AuthState);
  const login = useCallback(
    async (email: string, password: string) => {
      try {
       const loginResult = await authService.login(email, password);
       if (loginResult) {
         const state = {user: {}, token: 'token', isLogged: true} as AuthState;
         setAuthState(state);
       }
      } catch (error) {}
    },
        [authService]
  );
  const logout = useCallback(
    () => authService.logout(),
    [authService],
  );
  const contextValue: AuthContext = useMemo(
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
