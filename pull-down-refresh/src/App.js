import React, { useEffect, useRef, useState } from 'react';
import pullToRefresh from './pullDown';
import logo from './logo.svg';
import './App.css';
const { init } = pullToRefresh()

function App() {
  const [state, setState] = useState(1)
  let arr = []
  return (
    <div >
      123
      <button onClick={() => {
        arr.push(3);
        console.log(arr)
        setState(state + 1)
      }}>
        click
      </button>
    </div>
  );
}

export default App;