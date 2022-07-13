import { MainRoutes } from './routes'
import * as React from 'react';
import {setupInterceptor} from '../utils/http';
import store from '../store';
import {BrowserRouter} from 'react-router-dom';

export default function () {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setupInterceptor(store)
    setMounted(true)
  }, [])

  return mounted ? (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  ) : null
}
