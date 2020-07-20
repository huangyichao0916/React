import React, { Component } from 'react';
import './mine.styl'
import avatar from '@/assets/imgs/avatar.JPG';
import MineItem from './mineItem/MineItem'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";

class Mine extends Component {
    state = {
        items:[
            {
                isCountShow:true,
                isDotShow:true,
                title:'账户',
                icon:'&#xe8d5;',
            },
            {
                isCountShow:false,
                isDotShow:false,
                title:'账户',
                icon:'&#xe8d5;',
            },
        ]
    }
    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            // pagination: {
            //   el: '.swiper-pagination',
            //   type: 'bullets',
            // }
        })
    }
    render() {
        let {items} = this.state;
        items = items.map((i,index) => {
            return(
                <MineItem {...i}/>
            )
        })
        return (
            <div className="mine">
                <div className="mine-header-wrapper">
                    <span>我的</span>
                    <span class="icon iconfont">&#xe665;</span>
                </div>
                <div className="mine-info-wrapper">
                    <div className="avatar">
                        <img src={avatar} alt="图片不见了" />
                    </div>
                    <div className="name-and-phone">
                        <h3 className="name">
                            Geek_14dce3
                        </h3>
                        <div className="phone-and-selfPage">
                            <div className="phone">12345678910</div>
                            <div className="selfPage">
                                个人主页<span className="icon iconfont right">&#xe613;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={avatar} alt="图片不见了" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                {items}
            </div>
        );
    }
}

export default Mine;