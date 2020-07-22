import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
        <Provider store={store}>
          <HashRouter>
            {renderRoutes(routes)}
          </HashRouter>
        </Provider>
  );
}

export default App;
