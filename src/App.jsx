import { useState } from "react";
import List from "./components/List";
import {users  } from './utils/data'
let counter = 0;
function App() {
const [count, setCount] = useState(10);  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
       <h2>Contador</h2>
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
       
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            counter += 1;
            document.getElementById("counter-display").innerText = counter;
            console.log(counter);
          }}
        >
          +
        </button>
        <p id="counter-display">{counter}</p>
        <button
          onClick={() => {
            counter -= 1;
            document.getElementById("counter-display").innerText = counter;
            console.log(counter);
          }}
        >
          -
        </button>

        <button onClick={() => {setCount(count-10)
          console.log(count)
        } }>-</button>

        <p>{count}</p>

        <button onClick={() => setCount(count+10)}>+</button>
      </div>
      </div>
      <List title='Todos los usuarios' users={users} />


    </div>
  );
}

export default App;
