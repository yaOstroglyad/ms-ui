import React, {ReactElement} from 'react';

import {AuthState} from './auth.state';

export interface AuthContext {
  readonly state: AuthState;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContext>({} as AuthContext);

type AuthProviderProps = {
  children: ReactElement;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [authState, setAuthState] = React.useState<AuthState>({} as AuthState);
  const login = async (email: string, password: string) => {
    const tokenResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await tokenResponse.json();
    if (data) {
      setAuthState({user: {id: ''}, token: 'token', isLogged: true});
    }
  };
  const logout = () => {};
  const value: AuthContext = {
    state: authState,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
