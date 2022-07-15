import {useRoutes} from 'react-router-dom';
import React from 'react';

const Login = React.lazy(() => import('./login/login.component').then(({Login}) => ({default: Login})));
const Main = React.lazy(() => import('./main/main.component').then(({Main}) => ({default: Main})));
const NotFoundPage = React.lazy(() => import('./not-found-page/not-found-page.component').then(({NotFoundPage}) => ({default: NotFoundPage})));

export const AppRoutes = () => useRoutes([
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
    element: <Main/>,
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
]);

