import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Collect from './Collect';
import Login from './Login';
import Child from './child';
import GrandChild from './grandChild';


function App() {
  return (
    <BrowserRouter>
      {/* header
      <Route path="login" component={Login}/>
      <PrivateRoute path="/collect" component={Collect} /> */}
      <Child />
    </BrowserRouter>
  );
}

export default App;