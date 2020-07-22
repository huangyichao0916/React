import React from 'react';
import './practiceCampItem.styl'
import { connect } from 'react-redux'
import { practiceCampBuyLessonActionCreator } from '@/store/action'
function PracticeCampItem(props) {

    return (
        <div className="practiceCamp-item">
            <div className="practiceCamp-item-img">
                <img src={props.img} alt="图片不见了" />
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{props.lessonName}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{props.teacherName}</div>
                    <div className="practiceCamp-item-teacher-desc">{props.teacherDesc}</div>
                </div>
                <div className="practiceCamp-item-time">最近开营：{props.month}月{props.day}日</div>
                <div className="price-and-join">
                    <div className="practiceCamp-item-price">￥{props.price}</div>
                    <div className="practiceCamp-item-oldprice">￥{props.oldprice}</div>
                    <button onClick={() => props.onHandleJoinCamp(props.price)}>立即报名</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleJoinCamp: (payload) => {
            dispatch(practiceCampBuyLessonActionCreator(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PracticeCampItem);