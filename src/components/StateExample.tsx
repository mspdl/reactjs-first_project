import { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button
        className="border p-3 rounded-md bg-cyan-300"
        onClick={handleButtonClick}
      >
        +1
      </button>
    </>
  );
};

export default StateExample;
