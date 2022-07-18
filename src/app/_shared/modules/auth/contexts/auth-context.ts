import React from 'react';

import {AuthState} from '../models/auth.state';

export interface AuthContextApi {
  readonly state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextApi>({} as AuthContextApi);
