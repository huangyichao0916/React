import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter,Link} from 'react-router-dom';
import routes from './route';

ReactDOM.render(
  <BrowserRouter>
    <h1>header</h1>
    <Link to="/">/////////</Link>

    <Link to="/children">children</Link>

    <Link to="/children/grandchildren">grandchildren</Link>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
