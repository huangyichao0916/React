import React from 'react';

const GrandChild = props => {
    const [number, setNumber] = React.useState(0)
    React.useEffect(() => {
        console.log('grandchild');
    })
    return (
        <div>
            GrandChild
            <button onClick={() => setNumber(number + 1)}>grandchildclick</button>
        </div>
    )
}

export default React.memo(GrandChild);