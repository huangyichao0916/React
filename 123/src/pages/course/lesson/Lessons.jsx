import React, { Component } from 'react';
import StudyPath from '@/components/course/lesson/studyPath/StudyPath';
import './lesson.styl'

class Lesson extends Component {
    state = {  }
    render() { 
        return (
            <div className="lesson">
                <StudyPath />
            </div>
        );
    }
}
 
export default Lesson;