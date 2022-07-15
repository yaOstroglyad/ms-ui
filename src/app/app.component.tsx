import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {AppRoutes} from './app.routes';

const theme = createTheme();

export const AppComponent: React.FC = () => (
  <BrowserRouter>
    <React.Suspense>
      <ThemeProvider theme={theme}>
      <AppRoutes />
      </ThemeProvider>
    </React.Suspense>
  </BrowserRouter>
)
