import {lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const SystemGeneral = lazy(() => import('./system-general/system-general.component').then(({SystemGeneral}) => ({default: SystemGeneral})));

export const SystemRoutes = () => useRoutes([
  {
    index: true,
    element: <Navigate to="status" replace />,
  },
  {
    path: 'general',
    element: <SystemGeneral />,
  },
]);
