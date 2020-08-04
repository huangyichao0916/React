import React from 'react';
import ReactDOM from 'react-dom';
import {MyComponent} from './demo';

const App = () => {
    return (
        <div className="app">
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElement
)