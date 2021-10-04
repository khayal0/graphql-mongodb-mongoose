import { useState } from "react";

import { useAppSelector, useAppDispatch } from "store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./slice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  // handlers
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleAddByAmount = () => dispatch(incrementByAmount(incrementValue));
  const handleIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue));
  const handleAsyncIncrement = () => dispatch(incrementAsync(incrementValue));

  // render
  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={handleAddByAmount}>Add Amount</button>
        <button onClick={handleAsyncIncrement}>Add Async</button>
        <button onClick={handleIncrementIfOdd}>Add If Odd</button>
      </div>
    </div>
  );
}
