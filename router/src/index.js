import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Link, BrowserRouter,Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
