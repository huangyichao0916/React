import React, { Component } from 'react';
import './studyPathItem.styl';

class StudyPathItem extends Component {
    state = {  }
    render() { 
        return (
            <div className="studyPathItem">
                <div className="description">
                    <div className="type">
                        Java工程师
                    </div>
                    <div className="totalLessons">
                        共有19门课程
                    </div>
                </div>
                <div className="img">
                    <img src="https://static001.geekbang.org/resource/image/50/b6/50cac4f8a8e9b600636c0890967113b6.jpg" alt=""/>
                </div>
            </div>
        );
    }
}
 
export default StudyPathItem;