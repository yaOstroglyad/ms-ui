import {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

const SystemGeneral = lazy(() => import('./system-general/system-general.component').then(({SystemGeneral}) => ({default: SystemGeneral})));

export const SystemRoutes = () => useRoutes([
  {
    index: true,
    element: <SystemGeneral />,
  },
  {
    path: 'general',
    element: <SystemGeneral />,
  },
]);
