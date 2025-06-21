import React, { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-card">
      <h2>Function Component</h2>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
