import React from 'react';

import {AuthState} from '../models/auth.state';

export interface AuthContextApi {
  readonly state: AuthState;
  login: (userName: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextApi>({} as AuthContextApi);
