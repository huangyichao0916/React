import React, { useEffect,useState, useRef } from 'react';
import './App.css';

function App() {
  console.log('refresh')
  const [state, setState] = useState({a:0});
  let ref = useRef();
  ref.current = state
  useEffect(() => {
    let it = setInterval(() => {
      let {a} = ref.current;
      a ++;
      setState({a});
      console.log(ref.current.a)
    }, 1000);
    return () => {
      clearInterval(it)
    }
  },[])
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
