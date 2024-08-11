import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  //   console.log(typeof inputValue, "iiiii");

  const count = useSelector((state) => state.counter.value);
  //   console.log(count, "ccc");

  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By Amount
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
        Increment By Amount
      </button>
    </>
  );
};

export default Counter;
