import React from 'react';
import './allCourses.styl';
import AllCoursesItem from '@/components/course/lesson/allCoursesItem/AllCoursesItem';

const AllCourses = props => {
    return(
        <div className="allCourses">
            <div className="allCoursesTop">
                全部课程
            </div>
            <div className="allCoursesNavBar">
                <div className="left">
                    课程形式
                </div>
                <div className="middle">
                    订阅状态
                </div>
                <div className="right">
                    上新
                </div>
            </div>
            <div className="allCoursesItemWrapper">
                <AllCoursesItem />
            </div>
        </div>
    )
}

export default AllCourses;