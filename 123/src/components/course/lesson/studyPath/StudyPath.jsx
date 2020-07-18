import React, { Component } from 'react';
import './studyPath.styl';
import StudyPathItem from './studyPathItem/StudyPathItem';

class StudyPath extends Component {
    state = {  }
    render() { 
        return (
            <div className="studyPath">
                <div className="top">
                    <div className="left">
                        学习路径
                    </div>
                    <div className="right">
                        查看全部
                    </div>
                </div>
                <div className="studyPathItemWrapper">
                    <StudyPathItem />
                </div>
            </div>
        );
    }
}
 
export default StudyPath;