import React, { Component } from 'react';
import './mine.styl'
import avatar from '@/assets/imgs/avatar.JPG';
import MineItem from './mineItem/MineItem'
import Swiper from "swiper"

class Mine extends Component {
    state = {}
    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
              delay: 1000,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            }
          })
    }
    render() {
        return (
            <div className="mine">
                <div className="mine-header-wrapper">
                    <span>我的</span>
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
                                个人主页<span class="icon iconfont right">&#xe613;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="swiper-wrapper">
                        {/* {
                            this.state.sliderList.map(slider => {
                                return ( */}
                                    <div className="swiper-slide">
                                        {/* <a href={slider.linkUrl} className="slider-nav"> */}
                                            <img src="" alt="图片不见了" width="100%" height="100%" />
                                        {/* </a> */}
                                    </div>
                                {/* );
                            })
                        } */}
                    </div>
                    <div className="swiper-wrapper">
                        {/* {
                            this.state.sliderList.map(slider => {
                                return ( */}
                                    <div className="swiper-slide">
                                        {/* <a href={slider.linkUrl} className="slider-nav"> */}
                                            <img src="" alt="图片不见了" width="100%" height="100%" />
                                        {/* </a> */}
                                    </div>
                                {/* );
                            })
                        } */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <MineItem />
            </div>
        );
    }
}

export default Mine;