import React, { Component } from 'react';

class GrandChildren extends Component {
    render() { 
        console.log('GrandChildren',this.props);
        return (
            <div>
                GrandChildren
            </div>
        );
    }
}
 
export default GrandChildren;