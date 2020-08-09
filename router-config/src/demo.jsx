import React, { useEffect } from 'react';

const Demo = props => {
    /**
     * componentDidMount
     * componentDidUpdate
     * componentWillUnmount
     */
    useEffect(() => {
        console.log('mount');
        return () => console.log('unmount')
    })

    return(
        <div>
            Demo
        </div>
    )
}

export default Demo;