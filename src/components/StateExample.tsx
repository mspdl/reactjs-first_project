import { useState } from "react";

const StateExample = () => {
  const [showSecret, setShowScret] = useState(false);

  const handleButtonClick = () => {
    setShowScret(!showSecret);
  };
  return (
    <>
      <button
        className="border p-3 rounded-md bg-cyan-300"
        onClick={handleButtonClick}
      >
        {showSecret ? "Hide" : "Show"} secret area
      </button>
      {showSecret && (
        <div className="p-3 bg-blue-300 rounded-md mt-3">Secret area</div>
      )}
    </>
  );
};

export default StateExample;
