import React from 'react';
import './App.styl';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Course from '@/pages/course/Course';
// import Discover from '@/pages/discover/Discover';
// import Mine from '@/pages/mine/Mine';
// import Study from '@/pages/study/Study';
import './assets/font/iconfont.css'
// import Footer from '@/pages/discover/footer/Footer';
// import Account from '@/pages/account/Account';
// import RechargeRecord from '@/pages/rechargeRecord/RechargeRecord';
import { renderRoutes } from 'react-router-config';

// const MainPage = () => {
//   return (
//     <div>
//       <Route path="/" exact component={Discover}/>
//       <Route path="/course" component={Course} />
//       <Route path="/study" component={Study} />
//       <Route path="/mine" component={Mine} />

//       {/* 底部导航栏的显示 */}
//       <Route path="/" exact  component={Footer}/>
//       <Route path="/course"   component={Footer}/> 
//       <Route path="/study"   component={Footer}/>
//       <Route path="/mine"   component={Footer}/> 

//       <Route path="/account" component={Account} />
//       <Route path="/rechargeRecord" component={RechargeRecord}/>
//     </div>
//   )
// }

function App(props) {
  // console.log(props.route.routes);
  return ( 
    <div className="app">
      {renderRoutes(props.route.routes)}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
