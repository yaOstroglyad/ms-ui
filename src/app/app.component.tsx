import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoutes} from './app.routes';

export const AppComponent: React.FC = () => (
  <BrowserRouter>
    <React.Suspense>
      <AppRoutes />
    </React.Suspense>
  </BrowserRouter>
)
