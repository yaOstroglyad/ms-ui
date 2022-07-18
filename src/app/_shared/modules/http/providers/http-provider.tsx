import React, {ReactNode} from 'react';

import {HttpContext} from '../contexts/http-context';
import {HttpClient} from '../models/http-client.interface';
import {HttpInterceptors} from '../models/http-interceptors';

type HttpProviderProps = {
  readonly client: HttpClient;
  readonly interceptors?: HttpInterceptors;
  readonly children: ReactNode;
};

export const HttpProvider: React.FC<HttpProviderProps> = ({client, interceptors= {}, children}) => (
  <HttpContext.Provider value={{client, interceptors}}>{children}</HttpContext.Provider>
);
