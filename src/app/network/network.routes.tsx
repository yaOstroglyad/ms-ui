import {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

const NetworkTunneling = lazy(() => import('./network-tunneling/network-tunneling.component').then(({NetworkTunneling}) => ({default: NetworkTunneling})));

export const NetworkRoutes = () => useRoutes([
  {
    index: true,
    element: <NetworkTunneling />,
  },
  {
    path: 'tunneling',
    element: <NetworkTunneling />,
  },
]);
