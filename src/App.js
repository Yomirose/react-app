// import pic from "../src/assets/braided hair.jpg"

// import { useEffect, useState, useRef } from "react";
import pic1 from "../src/assets/braided hair.jpg";
import pic2 from "../src/assets/img 1.jpg";
import pic3 from "../src/assets/img 2.jpg";
import "./App.css";
import BasicExample from "./BasicExample";
import StateExample from "./StateExample";
import Testimonial from "./Testimonial";
// import Button from "./button";
import { Routes, Route } from "react-router-dom";


const details = [
  {
    img: pic1,
    name: "John Moss",
    bio: "A professional software developer",
    age: 23,
    testimonial: "The product is fantastic"
  },
  {
    img: pic2,
    name: "Christian Felix",
    bio: "A professional software designer",
    age: 30,
    testimonial: "The product is magnificent"
  },
  {
    img: pic3,
    name: "Olawale Ejiro",
    bio: "A professional product manager",
    age: 27,
    testimonial: "The product is superb"
  }
];


function App() {

  // const [name, setName] = useState("John");
  // const nameRef = useRef()

  // const greet = () =>{
  //   alert("Hello world!");
  // }

  // function alertMsg(){
  //   alert("Hello, welcome to my page")
  // }

  // function changeName(){
  //   setName(nameRef.current.value)
  // }

  // useEffect(()=>{
  //   // alertMsg();
  // })

  return (
    <div className="main_App_div">
      {/* <p>{name}</p>
      <input ref={nameRef}/>
      <button onClick={changeName}>Select Best Character</button> */}

            {/* <div className="App">

        {/* <img src={pic} alt="" width="200px" /> */}
      {/* {details.map((detail, i)=>{
        return <div key={i} className="details">
                  <img src={detail.img} alt="" width="100%" height="300px" />
                  <p style={{
                    fontSize: "20px",
                    color: "red",
                    fontWeight: "800"
                  }}>{detail.name}</p>
                  <p>{detail.bio}</p>
                  <p>{detail.age}</p>
              </div>
      })} */}

      {/* </div> */} 
      {/* { <button onClick={greet}>Click me</button> } */}

      {/* <Button childern="click me" nameOfFunction={greet} />    */}


      <Routes>
        <Route path="/" element={<BasicExample />} />
        <Route path="/state" element={<StateExample />} />
        <Route path="/Testimonial" element={<Testimonial detailOfUsers={details}/>} />
      </Routes>

    </div>
  );
}

export default App;

