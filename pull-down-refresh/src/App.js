import React, { useEffect, useRef } from 'react';
import pullToRefresh from './pullDown';
import logo from './logo.svg';
import './App.css';
const { init } = pullToRefresh()

function App() {
  const contentRef = useRef();
  useEffect(() => {
    init({
      contentEl: contentRef.current
    });
  }, [])
  return (
    <div >
      <header ref={contentRef}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;