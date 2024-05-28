import React from "react";
import { useCounter } from "../context/CounterContext";

interface counterProps {}

const Counter: React.FC<counterProps> = () => {
  const context = useCounter();

  const handleEvent = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    context?.setCount(context.value + 1);
  };

  return (
    <div>
      <h4 onClick={handleEvent}>{context?.value}</h4>
    </div>
  );
};

export default Counter;
