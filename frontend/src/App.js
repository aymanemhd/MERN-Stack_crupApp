
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(true)
  return (
    <div>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         Click me
       </button>
    </div>
  );
}

export default App;
