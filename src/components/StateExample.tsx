import { useState } from "react";

const StateExample = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showName, setShowName] = useState(false);

  const handleButtonSecretAreaClick = () => {
    setShowSecret(!showSecret);
  };

  const handleShowInputButtonClick = () => {
    setShowName(!showName);
  };

  return (
    <>
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
