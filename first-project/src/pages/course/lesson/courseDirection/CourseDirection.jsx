import React from 'react';
import './courseDirection.styl';
import CourseDirectionItem from '@/components/course/lesson/courseDirectionItem/CourseDirectionItem';
import classnames from 'classnames';

const CourseDirection = props => {
    let {courseLessonDataSource} = props;
    courseLessonDataSource = courseLessonDataSource.toJS();
    // console.log(courseLessonDataSource);
    let items = courseLessonDataSource.reduce((pre,cur) => {
        const courseDirection = cur.course_direction;
        if (pre[courseDirection]) {
            pre[courseDirection]++;
        }else{
            pre[courseDirection] = 1;
        }
        return pre;
    },{})
    // console.log(items);
    items = Object.keys(items).map((i,index) => {
        let isEvenNumber = index % 2 === 0 ? false : true;
        return(
            <CourseDirectionItem 
            key={index} 
            title={i}
            myClassname={classnames({
                courseDirectionItem:true,
                evenNumberItem:isEvenNumber,
            })}
            />
        )
    });
    console.log(items);
    return (
        <div className="courseDirection">
            <div className="courseDirectionTop">
                <div className="left">
                    课程方向
                </div>
                <div className="right">
                    查看全部
                </div>
            </div>
            <div className="courseDirectionItemWrapper">
                {items}
            </div>
        </div>
    )
}

export default CourseDirection;