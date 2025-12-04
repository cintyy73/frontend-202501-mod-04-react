import { useCounter } from "../hooks/useCounter";

const CounterControls = () => {
const {decrement,increment,reset} =useCounter()

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterControls;
