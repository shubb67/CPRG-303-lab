"use client";

import { useState } from "react";
import IncrementButton from "../../components/IncrementButton";
import DecrementButton from "../../components/DecrementButton";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <IncrementButton increment={increment} />
        <DecrementButton decrement={decrement} />
      </div>
    </div>
  );
};

export default Lab3;
