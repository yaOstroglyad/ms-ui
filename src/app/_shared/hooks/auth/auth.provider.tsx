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
    const tokenResponse = await fetch('https://reqres.in//api/login', {method: 'POST', body: JSON.stringify({email, password})});
    type JSONResponse = {
      data?: {token: string};
      errors?: Array<{message: string}>;
    };
    const {data}: JSONResponse = await tokenResponse.json()
    if (data) {
      setAuthState({user: {id: ''}, token: data.token, isLogged: Boolean(data.token)});
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
