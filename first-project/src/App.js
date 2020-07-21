import React from 'react';
import './App.styl';
import { BrowserRouter, Route } from 'react-router-dom';
import Course from './pages/course/Course';
import Discover from './pages/discover/Discover';
import Mine from './pages/mine/Mine';
import Study from './pages/study/Study';
import './mock/data';
// import axios from 'axios';
import './assets/font/iconfont.css'
import Footer from './pages/discover/footer/Footer';
import Account from '@/pages/account/Account';

const MainPage = () => {
  // useEffect(() => {
  //   axios.get('/manifest.json')
  //   .then(res => res.data)
  //   .then(res => console.log(res))
  // },[])
  return (
    <div>
      <Route path="/" exact component={Discover}/>
      <Route path="/course" component={Course} />
      <Route path="/study" component={Study} />
      <Route path="/mine" component={Mine} />

      {/* 底部导航栏的显示 */}
      <Route path="/" exact  component={Footer}/>
      <Route path="/course"   component={Footer}/> 
      <Route path="/study"   component={Footer}/>
      <Route path="/mine"   component={Footer}/> 

      <Route path="/account" component={() => <Account balance={199}/>} />
    </div>
  )
}

function App() {
  // useEffect(() => {
  //   axios.get('/mock/course')
  //     .then(res => res.data.courses)
  //     .then(res => console.log(res))
  // }, [])
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
