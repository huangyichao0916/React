import React,{useState} from 'react';
import GrandChild from './grandChild';

const Child = props => {
    const [number, setNumber] = useState(0)
    React.useEffect(() => {
        console.log('child');
    })
    return (
        <div>
            child
            <button onClick={() => setNumber(number + 1)}>childclick</button>
            <GrandChild number={number}/>
        </div>
    )
}

export default Child;