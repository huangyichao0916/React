import React,{ useEffect } from 'react';
import './App.styl';
import { BrowserRouter, Route } from 'react-router-dom';
import Course from './pages/course/Course';
import Discover from './pages/discover/Discover';
import Mine from './pages/mine/Mine';
import Study from './pages/study/Study';
import './mock/data';
import axios from 'axios';
import './assets/font/iconfont.css'
import Footer from './pages/discover/footer/Footer';

function App() {
  useEffect(() => {
    axios.get('/mock/course')
    .then(res => res.data.courses)
    .then(res => console.log(res))
  },[])
  return (
    <BrowserRouter>
      <Route path="/" exact component={Discover} />
      <Route path="/course" component={Course} />
      <Route path="/study" component={Study} />
      <Route path="/mine" component={Mine} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
