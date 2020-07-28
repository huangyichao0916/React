import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import aaa from './aaa';
import bbb from './bbb';
import ccc from './ccc';
import { renderRoutes } from 'react-router-config';

class One extends Component {
    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <div>
                11111111
                <Link to="/1/aaa">aaa</Link>
                <Link to="/1/bbb">bbb</Link>
                <Link to="/1/ccc">ccc</Link>
                {renderRoutes(this.props.route.routes)}

            </div>
        );
    }
}
 
export default One;