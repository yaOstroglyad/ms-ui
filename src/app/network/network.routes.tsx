import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const NetworkTunneling = lazy(() => import('./network-tunneling/network-tunneling.component').then(({NetworkTunneling}) => ({default: NetworkTunneling})));

export const NetworkRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="ip-address" replace />
  },
  {
    path: 'tunneling',
    element: <NetworkTunneling />,
  },
]);
