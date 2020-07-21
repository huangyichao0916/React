import React, { Component } from 'react';
import StudyPath from '@/components/course/lesson/studyPath/StudyPath';
import './lesson.styl';
import axios from 'axios';
import '@/mock/course-lesson-data';
import { connect } from 'react-redux';
import { addDataToCourseLessonActionCreator } from '@/store/action';

class Lesson extends Component {
    componentDidMount() {
        if (this.props.courseLessonDataSource.size > 0) {
            return;
        }
        console.log('请求courseLesson的数据');
        axios.get('/mock/course/lesson')
        .then(res => res.data.courses)
        .then(res => this.props.loadCourseLessonData(res));
    }
    render() {
        // console.log('lesson重新渲染');
        const {courseLessonDataSource} = this.props;
        // console.log(courseLessonDataSource)
        return (
            <div className="lesson">
                <StudyPath courseLessonDataSource={courseLessonDataSource}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseLessonDataSource: state.getIn(['courseLessonDataSource']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadCourseLessonData: (payload) => {
            dispatch(addDataToCourseLessonActionCreator(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);