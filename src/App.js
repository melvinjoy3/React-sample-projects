import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow]= useState(true)

  const Increment =(e)=>{
    setCount(count+1)
    setShow(!show)
  }

  return (
    <div>
      {count}
      <div>
        <button onClick={Increment}>Click Me</button>
      </div>
      {show && <span>This is text</span>}
      
    </div>
  );
}

export default App;
