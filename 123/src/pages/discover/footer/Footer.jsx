import React from 'react';
import './footer.styl';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerItem">
                <NavLink to="/" exact activeClassName="highlight">
                    <div className="footerItemContent">发现</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/course" activeClassName="highlight">
                    <div className="footerItemContent">讲堂</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/study" activeClassName="highlight">
                    <div className="footerItemContent">学习</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/mine" activeClassName="highlight">
                    <div className="footerItemContent">我的</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer;