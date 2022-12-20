//Create App that alows you to add and remove from cart
// import './App.css';
// import { useState } from 'react'

// const App =()=>{
//   const [count, setCount] = useState(0);
//   const removeHandeler = () =>{
//     // if(count<=0){
//     //   console.log("Add to cart");
//     //   alert("Please Add to Cart");
//     // }
//     // else{
//     setCount(count-1); 
//     //}  
//   }
//   const addHandler = () =>{
//       setCount(count+1);
//     }

//   return(
//       <div className = "App">
//       <h1>Sugar</h1>
//       <button onClick={removeHandeler}>Remove from Cart</button>
//       <button onClick={addHandler}>Add to Cart</button>
//       {(count > 0) ?<h1>{count}</h1>: <h1> Add Sugar to cart </h1>}
//       </div>      
//   );
// }
// export default App;


//Example of props
// import './App.css';
// import Person from './Person.js'
// const App =()=>{
//   return(
//     <div className='App'>
//       <h1>Hi am React</h1>
//       <Person name="Darshna" age="26"/>
//       <Person name="Darsh" age="27">My Hobbies: Playing Bedminton</Person>
//       <Person name="Chirag" age="26"/>
//     </div>
//   )
// }
// export default App;

//  import Comment from './Person.js'

//  const App =()=>{
//      return(
//       <div>
//         <Comment text = 'I hope you enjoy learning React!' name = 'Hello Kitty' avatarUrl = 'http://placekitten.com/g/64/64' />
//       </div>
//      )
//     }
//    export default App;

/////////////////////////////////////////////////////////////
//Using class Component

// import React,{Component} from "react";
// import './App.css';
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// class App extends Component{

//   state = {
//     username: 'Darshna'
//   }

//   usernameChangedHandler = (event) => {
//     this.setState({username: event.target.value});
//   }

//   render(){
//   return(
//     <div className="App">
//        <ol>
//           <li>Create TWO new components: UserInput and UserOutput</li>
//           <li>UserInput should hold an input element, UserOutput two paragraphs</li>
//           <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
//           <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
//           <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
//           <li>Add a method to manipulate the state (=> an event-handler method)</li>
//           <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
//           <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
//           <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
//           <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
//         </ol>
//         <UserInput 
//           changed={this.usernameChangedHandler} 
//           currentName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
        
//     </div>
//   );
// }
// }
// export default App;


//////////////////////////////////////////////////////////////////
//using Functional Component

// import './App.css';
// import { useState } from 'react';
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// const App = () =>{
//   const [userName , setUserName] = useState ({username : "Darshna"});

//   const userNameChangeHandler = (event) =>{
//     setUserName({username : event.target.value});
//   }
  
//   return (
//     <div className="App">
//         <ol>
//           <li>Create TWO new components: UserInput and UserOutput</li>
//           <li>UserInput should hold an input element, UserOutput two paragraphs</li>
//           <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
//           <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
//           <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
//           <li>Add a method to manipulate the state (=> an event-handler method)</li>
//           <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
//           <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
//           <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
//           <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
//         </ol>
//         <UserInput 
//           changed={userNameChangeHandler} 
//           currentName={userName.username} />
//         <UserOutput userName={userName.username} />
//         <UserOutput userName={userName.username} />
        
//     </div>
//   );

// }
// export default App;

// function AboutPage() {
//     return (
//       <>
//         <h1>About</h1>
//         <p>Hello there.<br />How do you do?</p>
//       </>
//     );
//   }
  
//   export default function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <AboutPage />
//       </div>
//     );
//   }
//////////////////////////////////////////////////////////////////////
//Filter Products
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} 
        />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly , onFilterTextChange,
    onInStockOnlyChange}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

///////////////////////////////////////////////////////////////////
//Show to do of Gregorio Y. Zara
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function App() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl+person.imageId+person.imageSize +".jpg"}  
        alt={person.name}
      />
   
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
