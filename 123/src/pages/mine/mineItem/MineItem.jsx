import React, { Component } from 'react';
import './mineItem.styl'
class MineItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mine-item-wrapper">
                <span class="icon iconfont left">&#xe8d5;</span>
                <div className="title">账户</div>
                <span class="icon iconfont right">&#xe613;</span>
            </div>
         );
    }
}
 
export default MineItem;