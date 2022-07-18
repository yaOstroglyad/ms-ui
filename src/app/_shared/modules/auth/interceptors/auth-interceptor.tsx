import React, {ReactElement, useContext} from 'react';

import {HttpContext} from '../../http/contexts/http-context';

import {AuthContext} from '../contexts/auth-context';

type AuthInterceptorProps = {
  children: ReactElement;
};

export const AuthInterceptor: React.FC<AuthInterceptorProps> = ({children}) => {
  const {state} = useContext(AuthContext);
  const {interceptors} = useContext(HttpContext);
  if (state.isLogged) {
    interceptors.request.add(({options}) => ({
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${state.token}`,
      },
    }));
  }
  return (
    <>{children}</>
  );
};
