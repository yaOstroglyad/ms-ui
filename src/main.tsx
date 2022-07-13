// Copyright 2018-present the xiejiahe. All rights reserved. MIT license.

import ReactDOM = require('react-dom')
import { Provider } from 'react-redux'
import AppRoute from './router'
import store from './store';


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
        <AppRoute />
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('ms-ui-root')
)
