import React, { useEffect, useState } from 'react';
import PracticeCampItem from './practiceCampItem/PracticeCampItem'
import './practiceCamp.styl'
import axios from 'axios';
import '@/mock/course-practiceCamp-data';

import BScroll from 'better-scroll';

function PracticeCamp() {
    const [pcdata, setPcdata] = useState([]);
    useEffect(() => {
        axios.get('mock/course/practiceCamp')
            .then(res => res.data.practiceCamps)
            .then(res => setPcdata(res))
    }, [])
    console.log(Array.isArray(pcdata));
    console.log(pcdata)

    useEffect(() => {
        const bscroll = new BScroll('.practiceCamp-wrapper',{
            scrollX:false,
            click:true,
            scrollY:true,
        })
    }, [])

    let items = pcdata.map((item, i) => {
        const { img, title, name, desc, month, day, price, oldprice } = item;
        return (
            <PracticeCampItem
                img={img}
                key={i}
                lessonName={title}
                teacherName={name}
                teacherDesc={desc}
                month={month}
                day={day}
                price={price}
                oldprice={oldprice}
            />
        )
    })
    return (
        <div className="practiceCamp-wrapper">
            <div className="content">
                <div className="practiceCamp-swiper-wrapper"></div>
                <div className="practiceCampCamp-item-wrapper">
                    <div className="practiceCamp-title">
                        <div className="practiceCamp-main-title">训练营</div>
                        <div className="go-my-classroom">去我的教室学习</div>
                    </div>
                    {
                        items
                    }
                </div>
            </div>
        </div>
    );
}

export default PracticeCamp;