import React,{useState,useEffect} from 'react';
import './App.css';
import Demo from './demo'
import Children from './children'

function App() {
  // document.addEventListener('click',() => console.log('document'))
  // console.log(document.querySelector('.children'))
  // const [boo, setBoo] = useState(false);

  // const [xxx, setXxx] = useState(0)

  // useEffect(() => {
  //   console.log('111')
  //   return () => console.log('222')
  // })

  return (
    <div className="App" onClick={() => console.log('app')}>
      {/* <button 
      onClick={() => {
        setBoo(!boo)
        // setXxx(xxx + 1)
      }}
      >
        click
      </button>
      
      {boo && <Demo />} */}

      <Children />
    </div>
  );
}

export default App;
