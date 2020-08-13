import React,{useState,useEffect} from 'react';
import './App.css';
import Demo from './demo'

function App() {
  const [boo, setBoo] = useState(false);

  // const [xxx, setXxx] = useState(0)

  // useEffect(() => {
  //   console.log('111')
  //   return () => console.log('222')
  // })

  return (
    <div className="App">

      <button 
      onClick={() => {
        setBoo(!boo)
        // setXxx(xxx + 1)
      }}
      >
        click
      </button>
      
      {boo && <Demo />}

    </div>
  );
}

export default App;
