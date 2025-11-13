import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
console.log('fuera', count)
  useEffect(()=>{
    console.log('El contador cambió: ', count)
  },[count])  

  return <div>
    <p>{count}</p>
     <button
        onClick={() => {
          setCount(prev => prev +1);
        }}
      >
       +  Sumar
      </button>
  </div>;
};

export default Counter;
