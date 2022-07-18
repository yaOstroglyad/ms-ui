import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {AuthProvider} from './_shared/modules/auth/providers/auth.provider';
import {jwtAuthServiceConstructor} from './_shared/modules/auth/services/jwt-auth-service-constructor';

import {AppRoutes} from './app.routes';
import {HttpProvider} from './_shared/modules/http/providers/http-provider';
import {nativeHttpClient} from './_shared/modules/http/services/native-http-client';
import {HttpClient} from './_shared/modules/http/models/http-client.interface';
import {AuthInterceptor} from './_shared/modules/auth/interceptors/auth-interceptor';

const theme = createTheme();
const jwtAuthService = jwtAuthServiceConstructor({});
const httpClient = nativeHttpClient as HttpClient;

export const AppComponent: React.FC = () => (
  <AuthProvider authService={jwtAuthService}>
    <HttpProvider client={httpClient}>
      <AuthInterceptor>
        <BrowserRouter>
          <React.Suspense>
            <ThemeProvider theme={theme}>
              <AppRoutes/>
            </ThemeProvider>
          </React.Suspense>
        </BrowserRouter>
      </AuthInterceptor>
    </HttpProvider>
  </AuthProvider>
);
