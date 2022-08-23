import { useState ,useEffect } from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [foodname , setFoodName] = useState('')
  const [days , setDays] = useState(0)
  const[foodlist , setFoodlist] = useState([])

  useEffect(() =>{
    Axios.get("http://localhost:4000/read").then((response) => {
      setFoodlist(response.data)
    });
  }, [])


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
      <h1>FoodList</h1>
      {foodlist.map((val , key) => { return <div><h1>{val.foodname}</h1> <h2>{val.daysSinceIAte}</h2></div> })}
    </div>
  );
}

export default App;
