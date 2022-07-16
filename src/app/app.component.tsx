import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {AuthProvider} from './_shared/hooks/auth/auth.provider';
import {jwtAuthServiceConstructor} from './_shared/hooks/auth/jwt-auth-service-constructor';

import {AppRoutes} from './app.routes';

const theme = createTheme();
const jwtAuthService = jwtAuthServiceConstructor({});

export const AppComponent: React.FC = () => (
  <AuthProvider authService={jwtAuthService}>
    <BrowserRouter>
      <React.Suspense>
        <ThemeProvider theme={theme}>
          <AppRoutes/>
        </ThemeProvider>
      </React.Suspense>
    </BrowserRouter>
  </AuthProvider>
);
