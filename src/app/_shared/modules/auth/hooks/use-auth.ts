import React from 'react';

import {AuthContext} from '../contexts/auth-context';

interface UseAuth {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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
};
