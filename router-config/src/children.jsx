import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'

class Children extends Component {  
    render() { 
        console.log('Children',this.props);
        return (
            <div>
                Children
                {/* {renderRoutes(this.props.route)} */}
            </div>
        );
    }
}
 
export default Children;