
import { CounterContext } from "../context/CounterContext";
import { useCounter } from "../hooks/useCounter";

const CounterDisplay = () => {
//   const { count } = useContext(CounterContext);
 const { count } = useCounter()


  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default CounterDisplay;
