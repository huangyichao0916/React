import React, { Component,useState } from 'react';
import { renderRoutes } from 'react-router-config'

// class Children extends Component {
//     state = {
//         a: 1,
//     }
//     render() {
//         console.log('Children');
//         return (
//             <div>
//                 {/* Children
//                 {renderRoutes(this.props.route.routes)} */}
//                 <button onClick={() => {
//                     this.setState({
//                         a: 2
//                     }, () => {
//                         console.log(this.state.a)
//                     })
//                 }}>click</button>
//             </div>
//         );
//     }
// }

function Children(props) {
    
    console.log('in')
    const [myState, setMyState] = useState({ a: 0 })
    const { a } = myState;
    return (
        <div className="children" onClick={() => console.log('children')}>
            <button onClick={() => {
                console.log('button')
            }}>click</button>
        </div>
    )
}

export default Children;