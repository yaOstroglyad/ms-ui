import React from 'react';

import {AuthContext} from './auth.provider';

interface UseAuth {
  login: (email: string, password: string) => void;
  logout: () => void;
  isLogged: boolean;
  user: Record<string, unknown> | null;
}

export const useAuth = (): UseAuth => {
  const {state, login, logout} = React.useContext(AuthContext);
  return {
    user: state.user,
    isLogged: state.isLogged,
    login,
    logout,
  };
}
