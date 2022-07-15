import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {AuthProvider} from './_shared/hooks/auth/auth.provider';

import {AppRoutes} from './app.routes';

const theme = createTheme();

export const AppComponent: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <React.Suspense>
        <ThemeProvider theme={theme}>
          <AppRoutes/>
        </ThemeProvider>
      </React.Suspense>
    </BrowserRouter>
  </AuthProvider>
);
