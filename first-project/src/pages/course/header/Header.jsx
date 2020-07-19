import React from 'react';
import './header.styl';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="headerItem">
                <NavLink exact to="/course" activeClassName="selected">课程</NavLink>
            </div>
            <div className="headerItem">
                <NavLink to="/course/practiceCamp" activeClassName="selected">训练营</NavLink>
            </div>
            <div className="headerItem">
                <NavLink to="/course/lessonEveryday" activeClassName="selected">每日一课</NavLink>
            </div>
        </div>
    )
}

export default Header;