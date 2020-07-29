import React, { useState } from 'react';
import {CSSTransition} from 'react-transition-group';

const Demo = props => {
    const [isIn,setISIn] = useState(true);
    return(
        <>
            <CSSTransition 
            timeout={2000}
            classNames="msg"
            in={isIn}
            >
                <div className="box">123</div>
            </CSSTransition>
            <button onClick={() => setISIn(!isIn)}>toggle</button>
        </>
    )
}

export default Demo;