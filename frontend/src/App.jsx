import { useState ,useEffect } from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [foodname , setFoodName] = useState('')
  const [newfoodname , setNewFoodName] = useState('')
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

  const updatefood = (id) =>{
    Axios.put("http://localhost:4000/update",{
      id: id,
      newfoodname: newfoodname,
    });
  };

  const deletefood = (id) =>{ Axios.delete(`http://localhost:4000/delete/${id}`) };



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
      {foodlist.map((val , key) => 
      { 
        return (
        <div key={key} className="food">
          <h1>{val.foodname}</h1> <h1>{val.daysSinceIAte}</h1>
          <input type="text" onChange={(event) =>{ setNewFoodName(event.target.value) }}  placeholder="new food name..." />
          <button onClick={() => updatefood(val._id)}>Update</button>
          <button onClick={() => deletefood(val._id)}>Delete</button>
          </div>)  
        })}
    </div>
  );
}

export default App;
