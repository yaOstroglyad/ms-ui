import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {AuthProvider} from './_shared/auth-module/auth.provider';
import {jwtAuthServiceConstructor} from './_shared/auth-module/jwt-auth-service-constructor';

import {AppRoutes} from './app.routes';
import {HttpProvider} from './_shared/http-module/providers/http-provider';
import {nativeHttpClient} from './_shared/http-module/services/native-http-client';
import {HttpClient} from './_shared/http-module/models/http-client.interface';

const theme = createTheme();
const jwtAuthService = jwtAuthServiceConstructor({});
const httpClient = nativeHttpClient as HttpClient;

export const AppComponent: React.FC = () => (
  <HttpProvider client={httpClient}>
    <AuthProvider authService={jwtAuthService}>
      <BrowserRouter>
        <React.Suspense>
          <ThemeProvider theme={theme}>
            <AppRoutes/>
          </ThemeProvider>
        </React.Suspense>
      </BrowserRouter>
    </AuthProvider>
  </HttpProvider>
);
