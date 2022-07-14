import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/style.scss';

import AppRoute from './router';

const container = document.getElementById('ms-ui-root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
