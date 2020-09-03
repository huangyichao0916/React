import React from 'react';
import Logo from '../logo'

export default function Header(props) {
    const handleClick = () => {
        console.log('123')
    }
    return (
        <div>
            <button onClick={handleClick}>按钮</button>
            <Logo />
        </div>
    )
}