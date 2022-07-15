import {lazy} from 'react';
import {useRoutes} from 'react-router-dom';

const System = lazy(() => import('../system/system.component').then(({System}) => ({default: System})));

export const MainRoutes = () => useRoutes([
  {
    index: true,
    element: <System />,
  },
  {
    path: 'system/*',
    element: <System />,
  },
]);
