import React, { Component } from 'react';
import Lesson from './lesson/Lessons';
import LessonEveryday from './lessonEveryday/LessonEveryday';
import PracticeCamp from './practiceCamp/PracticeCamp';
import {Route, Link} from 'react-router-dom';
import './course.styl';

class Course extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="course">
                <div className="header">
                    <div>
                        <Link to="/course">课程</Link>
                    </div>
                    <div>
                        <Link to="/course/practiceCamp">训练营</Link>
                    </div>
                    <div>
                        <Link to="/course/lessonEveryday">每日一课</Link>  
                    </div>
                </div>
                
                <Route path="/course" exact component={Lesson} />
                <Route path="/course/practiceCamp" component={PracticeCamp} />
                <Route path="/course/lessonEveryday" component={LessonEveryday} />
            </div>
        );
    }
}
 
export default Course;