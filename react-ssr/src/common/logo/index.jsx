import React from 'react';

class Logo  extends React.Component{
    constructor(){
        super();
        // console.log('logo')
    }
    componentDidMount(){
        console.log('logo mount')
    }
    render(){
        // console.log('render')
        return(
            <div>
                logo
            </div>
        )
    }
}

export default Logo;