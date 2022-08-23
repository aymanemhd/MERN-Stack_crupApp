import { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [foodname , setFoodName]=useState('')
  const [days , setDays]=useState(0)

  const addToList = () =>{
    Axios.post("http://localhost:4000/insert",{
      foodname:foodname,
      days:days,
    });
  };


  return (
    <div className="App">
      <h1>Crud App with MERN</h1>
      <label>food name</label>
      <input 
      type="text" 
      onChange={(event) =>{
        setFoodName(event.target.value)
      }} 
      />
      <label>day</label>
      <input 
      type="number" 
      onChange={(event) =>{
        setDays(event.target.value)
      }} 
      />
      <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default App;
