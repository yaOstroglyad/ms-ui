import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { MainRoutes } from './routes'

export default function () {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true)
  }, []);

  return mounted
    ? (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
    : null;
}
