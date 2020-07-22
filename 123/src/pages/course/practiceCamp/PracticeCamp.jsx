import React from 'react';
import PracticeCampItem from './practiceCampItem/PracticeCampItem'
import './practiceCamp.styl'

function PracticeCamp() {
    return (
        <div className="practiceCamp-wrapper">
            <div className="practiceCamp-swiper-wrapper"></div>
            <div className="practiceCampCamp-item-wrapper">
                <div className="practiceCamp-title">
                    <div className="practiceCamp-main-title">训练营</div>
                    <div className="go-my-classroom">去我的教室学习</div>
                </div>
                <PracticeCampItem 
                lessonName={'前端进阶训练营·第3期'}
                teacherName={'程劭非（winter）'}
                teacherDesc={'前手机淘宝前端负责人11111111'}
                time={'第3期·7月27日开课'}
                price={1999}
                oldprice={2999}
                />
            </div>
        </div>
    );
}

export default PracticeCamp;