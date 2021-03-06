import {useRoutes} from 'react-router-dom';
import React from 'react';

import {GuardedRoute} from './_shared/components/guarded-route/guarded-route.component';
import {useAuth} from './_shared/modules/auth/hooks/use-auth';

const Login = React.lazy(() => import('./login/login.component').then(({Login}) => ({default: Login})));
const Main = React.lazy(() => import('./main/main.component').then(({Main}) => ({default: Main})));
const NotFoundPage = React.lazy(() => import('./not-found-page/not-found-page.component').then(({NotFoundPage}) => ({default: NotFoundPage})));

export const AppRoutes = () => {
  const {isLogged} = useAuth();
  return useRoutes([
    {
      path: '/',
      element: <Login/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/main/*',
      element: <GuardedRoute isAllowed={isLogged} redirectPath="/login"><Main /></GuardedRoute>,
    },
    {
      path: '*',
      element: <NotFoundPage/>,
    },
  ]);
};

