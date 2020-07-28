import React from 'react';
import './App.css';
import { Link, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import One from './One';
// import Two from './Two';
// import Three from './Three';

function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/1'>1</Link>
        <Link to='/2'>2</Link>
        <Link to='/3'>3</Link>
        <Link to='/'>首页</Link>

        {renderRoutes(props.route.routes)}
        {/* <Route path="/1" component={One} />
        <Route path="/2" component={Two}/>
        <Route path="/3" component={Three}/> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
