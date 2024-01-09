import { useState } from "react";

const StateExample = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showName, setShowName] = useState(false);
  const [count, setCount] = useState(0);

  const handleButtonSecretAreaClick = () => {
    setShowSecret(!showSecret);
  };

  const handleShowInputButtonClick = () => {
    setShowName(!showName);
  };

  const handleCountButtonClick = () => {
    console.log("count 0: ", count);
    setCount(count + 2);
    console.log("count 1: ", count);
    setCount(count + 2);
    console.log("count 2: ", count);
    setCount(count + 2);
    console.log("count 3: ", count);
    console.log("new count: ", count + 2);
    alert(count);
  };

  return (
    <>
      <div className="p-3 flex flex-col gap-2 items-center">
        <p>{count}</p>
        <button
          onClick={handleCountButtonClick}
          className="bg-blue-800 text-white p-3 rounded"
        >
          +2
        </button>
      </div>
      <input
        type="text"
        className="border border-black p-3 text-xl text-black rounded"
        placeholder="Type your name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        onClick={handleShowInputButtonClick}
        className="p-3 bg-green-300 rounded-md mt-3"
      >
        {showName ? "Hide" : "Show"} field value
      </button>
      {showName && <p>{nameInput}</p>}
      <button
        className="border p-3 rounded-md bg-cyan-300"
        onClick={handleButtonSecretAreaClick}
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
