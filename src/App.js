import './App.css';
import { useState } from 'react'

const App =()=>{
  const [counter, setCounter] = useState(0);
  return(
      <div className = "App">
      <h1>Sugar</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount -1)}>Remove from Cart</button>
      <button onClick={()=>setCounter((prevCount)=>prevCount +1)}>Add to Cart</button>
      <h1>{counter}</h1>
      </div>
      
  );
}

export default App;
