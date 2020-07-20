import React, { Component } from 'react';
import './mineItem.styl'
class MineItem extends Component {
    state = {}
    render() {
        const {isCountShow,isDotShow,title,icon} = this.props;
        return (
            <div className="mine-item-wrapper">
                <span className="icon iconfont left">{icon}</span>
                <div className="title-wrapper">
                    <div className="title">{title}</div>
                    {isDotShow && <div className="red-dot"></div>}
                    {isCountShow && <div className="detail">0.00</div>}
                </div>
                <span className="icon iconfont right">&#xe613;</span>
            </div>
        );
    }
}

export default MineItem;