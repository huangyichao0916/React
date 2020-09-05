import React, { useEffect,useState } from 'react';
import Logo from '../logo'

export default function Header(props) {
    const [state, setState] = useState(1)
    console.log(123)
    const handleClick = () => {
        console.log('click')
        setState(state + 1);
    }
    useEffect(() => {
        console.log('componentDidMount');
    },[])
    return (
        <div>
            <button onClick={handleClick}>按钮</button>
            <Logo />
        </div>
    )
}