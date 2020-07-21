import React, { Component } from 'react';
import Lesson from './lesson/Lessons';
import LessonEveryday from './lessonEveryday/LessonEveryday';
import PracticeCamp from './practiceCamp/PracticeCamp';
import {Route} from 'react-router-dom';
import './course.styl';
import Header from './header/Header';

class Course extends Component {
    render() { 
        return ( 
            <div className="course">
                <Header />
                
                <Route path="/course" exact component={Lesson} />
                <Route path="/course/practiceCamp" component={PracticeCamp} />
                <Route path="/course/lessonEveryday" component={LessonEveryday} />
            </div>
        );
    }
}

export default Course;