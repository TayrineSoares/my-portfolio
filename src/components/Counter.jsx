// Creating a counter just to remember react skills 

import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () =>{
    setCount(count + 1);
  }

  const handleDecrement = () =>{
    setCount(count - 1);
  }

  return (
    <div>
      <h1>I am the counter</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}> Increment </button>
      <br/>
      <button onClick={handleDecrement}> Decrement </button>
      
    </div>
  )
};

export default Counter;
