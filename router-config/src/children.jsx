import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'

class Children extends Component {  
    render() { 
        console.log('Children',this.props);
        return (
            <div>
                Children
                {renderRoutes(this.props.routes)}
            </div>
        );
    }
}
 
export default Children;