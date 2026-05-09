// import Product from "./pages/Product";

// import "./App.css";
// function App() {
//   return (
//     <div className="App">

//        product data
    
    
  

//     </div>
//   );
// } 

// export default App;

// // Without useState functional component
// import React from 'react'

// function App() {
  
// let MyName = "Rohit"

// function upDateName(){
//   MyName = "Rohit Kumar"
//   console.log(" Name Updated  : ", MyName)
// }
// console.log(" Before Update Name : ", MyName)
// upDateName()

// function handleChange(e){
//   console.log("Change ", e.target.value)
//   MyName = e.target.value;
//   console.log(" My Name Updated  : ", MyName)
// }
//   return (
//     <div>
//       <h1>{MyName}</h1>
//       <h1>{"Updated" +  MyName}</h1>

//       <input type="text" placeholder='Enter Name' onChange={(abd)=>handleChange(abd)} />
//       <button onClick={()=>upDateName()}>Update Name</button>
      
//     </div>
//   ) 
// }

// export default App


// --> useState functional component

// import React, { useReducer } from 'react'
// import { useState } from 'react'
// function App() { 
//   const myStyle = {
//         backgroundColor : "green",
//         color : "white",
//         padding : "10px",
//         borderRadius : "5px",
//         border : "none",
//         cursor : "pointer"
//        }

//        const [myName, setMyName] = useState("Nelson");
//        function handleChange(e){
//         setMyName(e.target.value)
//         console.log("Change ", e.target.value)
//        }
//        function reducer(action, count){
//         if(action === "increment"){
//           return count + 1
//         }
//         else if(action === "decrement"){
//           return count - 1
//         }
//         else{
//           return count
//         }
//        }

//        const [count, setCount] = useState(0);
//        const[counter, dispatch] = useReducer(reducer,0)
//   return (
//     <div>
//       <h1>{myName}</h1>
//       <br />
//       <h1>{counter : count+1}</h1>
//       <br />
//       <button onClick={()=>dispatch({type: "increment"})} style={myStyle}>Increment</button>
//       <button onClick={()=>dispatch({type: "decrement"})} style={myStyle}>Decrement</button>

//       <button
//         onClick={()=>setMyName(myName +"Mahesani")}
//         style={myStyle}
//       >Update</button>
//       <br />
//       <input type="text" placeholder='Enter Name' onChange={(e)=>handleChange(e)} />
//     </div>
//   )
// }
// export default App

//useState--> update the code in return and alson render auto
// useEffect --> Handle side effects (API calls, event listeners, DOM updates)

// useEffect
// import React, {  createContext, useState } from 'react'


// function App() {
//   const buttonStyle = {
//     backgroundColor : "blue",
//     color : "white",
//     padding : "10px",
//     borderRadius : "5px",
//     border : "none",
//     cursor : "pointer"
//   }
//   const [age,setAge] = useState(2);
//   const [doubleAge,setDoubleAge] = useState(2);

// useEffect(()=>{ 
//   setTimeout(()=>{

// setDoubleAge((doubleAge)=>doubleAge * 2)
// },2000)
// },[age]) // dependency array
//   return (
//     <div>
//         <h1>Use Effect</h1>
//         <p>My Age is : {age}</p>

//         <br />
//         <h1>Double Age: {doubleAge}</h1>

//         <button onClick={()=>setAge(age + 1)}
//           style={buttonStyle}
//         >
//           Update Age
//         </button>
        
//     </div>
//   )
// }

// export default App



// useContext --> Manage global state across components without prop drilling

// function App() {
//   const [myName, setMyName] = useState("Rohit")

//    const myNameContext = createContext(myName)
//   return (
//     <myNameContext.Provider value={myName}>
//       <div>
//         <App2 />
//         <h1>my Name is : {myName} </h1>
//       </div>
//     </myNameContext.Provider>
//   )
// }
// export function App2({myName}){
  
//   return(
//     <div>
//       <App3 myName={myName} />
//     </div>  
//   )
// }

// export default App

// export function App3({myName}){
//   return(
//     <div>
//       <h1>My Name is : {myName}</h1>
//     </div>
//   )
// }

// import React, { createContext, useState } from 'react'
// import Component1 from './components/Component1'
// import Component2 from './components/Component2'
// import Component3 from './components/Component3'
// export const NameContext = createContext()
// function App() {
//   const  [myName, setMyName] = useState("Rohit")
//   return (
//     <div>
//          <NameContext.Provider value={myName}>
//          <h1>My Name is : {myName}</h1>
//         <Component1 />  
//         <Component2 />
//         <Component3 />
//         </NameContext.Provider>
      
//     </div>
//   )
// }

// export default App

import React from "react";
import Routing from "./route/Routing";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Categories from "./components/Categories";
// import FeaturedDishes from "./components/FeaturedDishes";
// import MenuSection from "./components/MenuSection";
// import Testimonials from "./components/Testimonials";
// import Newsletter from "./components/Newsletter";
// import Footer from "./components/Footer";
// import "./styles/global.css";
 
export default function App() {
  // const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="app">
      <Routing />
     
    </div>
  );
}

