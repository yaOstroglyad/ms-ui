import {useRoutes} from 'react-router-dom';

import NoMatch from '../app/not-found-page/404';
import {Main} from '../app/main/main.component';
import {PrivateRoute} from '../app/_shared/components/private-route/private-route.component';
import {Login} from '../app/login/login.component';

export const MainRoutes = () => {
  const _Login = (
    <PrivateRoute element={Login} meta={{
      title: 'Login page title',
    }}/>
  );

  return useRoutes([
    {
      path: '/',
      element: _Login,
    },
    {
      path: '/login',
      element: _Login,
    },
    {
      path: '/main',
      element: <Main/>,
      children: [
        {
          path: 'index',
          element: <PrivateRoute element={Main} meta={{
            requiresAuth: true,
            title: 'Home page title',
          }}/>,
        },
        {
          path: '*',
          element: <PrivateRoute element={NoMatch} meta={{
            requiresAuth: false,
            title: '404 Not Found',
          }}/>,
        },
      ],
    },
    {
      path: '*',
      element: <PrivateRoute element={NoMatch} meta={{
        requiresAuth: false,
        title: '404 Not Found',
      }}/>,
    },
  ]);
};
