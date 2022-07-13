import {useRoutes} from 'react-router-dom';
import PrivateRoute from '../private-route';
import NoMatch from '../app/modules/exception/404';
import MainEntry from '../app/modules/main';
import HomeIndex from '../app/modules/index';
import Login from '../app/modules/login';

export function MainRoutes() {
  const _Login = <PrivateRoute element={Login} meta={{
    title: 'Login page title'
  }} />

  return useRoutes([
    {
      path: '/',
      element: _Login
    },
    {
      path: '/login',
      element: _Login
    },
    {
      path: '/home',
      element: <MainEntry/>,
      children: [
        {
          path: 'index',
          element: <PrivateRoute element={HomeIndex} meta={{
            requiresAuth: true,
            title: 'Home page title'
          }}/>,
        },
        {
          path: '*',
          element: <PrivateRoute element={NoMatch} meta={{
            requiresAuth: false,
            title: '404 Not Found'
          }}/>
        },
      ]
    },
    {
      path: '*',
      element: <PrivateRoute element={NoMatch} meta={{
        requiresAuth: false,
        title: '404 Not Found'
      }}/>
    },
  ])
}
