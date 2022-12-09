//Create App that alows you to add and remove from cart
// import './App.css';
// import { useState } from 'react'

// const App =()=>{
//   const [count, setCount] = useState(0);
//   const removeHandeler = () =>{
//     if(count<=0){
//       console.log("Add to cart");
//       alert("Please Add to Cart");
//     }
//     else{
//     setCount(count-1); 
//     }  
//   }
//   const addHandler = () =>{
//       setCount(count+1);
//     }

//   return(
//       <div className = "App">
//       <h1>Sugar</h1>
//       <button onClick={removeHandeler}>Remove from Cart</button>
//       <button onClick={addHandler}>Add to Cart</button>
//       <h1>{count}</h1>
//       </div>      
//   );
// }
// export default App;


//Example of props
import './App.css';
import Person from './Person.js'
const App =()=>{
  return(
    <div className='App'>
      <h1>Hi am React</h1>
      <Person name="Darshna" age="26"/>
      <Person name="Darsh" age="27">My Hobbies: Playing Bedminton</Person>
      <Person name="Chirag" age="26"/>
    </div>
  )
}
export default App;