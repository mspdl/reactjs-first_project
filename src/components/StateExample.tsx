import { useState } from "react";

type Person = {
  firstName: string;
  lastName: string;
};

const StateExample = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showName, setShowName] = useState(false);
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState<Person>({
    firstName: "",
    lastName: "",
  });

  const handleButtonSecretAreaClick = () => {
    setShowSecret(!showSecret);
  };

  const handleShowInputButtonClick = () => {
    setShowName(!showName);
  };

  const handleCountButtonClick = () => {
    setCount(count + 1);
    setCount((oldCount) => oldCount + 1);
  };

  const handleClearFirstNameButtonClick = () => {
    setFullName({ ...fullName, firstName: "" });
  };

  const handleClearFullNameButtonClick = () => {
    setFullName({ firstName: "", lastName: "" });
  };

  return (
    <>
      <div className="p-3 flex flex-col gap-2 items-center">
        <input
          type="text"
          placeholder="First Name"
          className="border border-black text-2xl text-black rounded-md mb-3 p-2"
          value={fullName.firstName}
          onChange={(e) =>
            setFullName({
              ...fullName,
              firstName: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-black text-2xl text-black rounded-md mb-3 p-2"
          value={fullName.lastName}
          onChange={(e) =>
            setFullName({
              ...fullName,
              lastName: e.target.value,
            })
          }
        />
        {(fullName.firstName || fullName.lastName) && (
          <>
            <p>
              My full name is: {fullName.firstName} {fullName.lastName}
            </p>
            {fullName.firstName && (
              <button
                onClick={handleClearFirstNameButtonClick}
                className="bg-orange-300 p-3 rounded"
              >
                Clear first name
              </button>
            )}
            <button
              onClick={handleClearFullNameButtonClick}
              className="bg-blue-300 p-3 rounded"
            >
              Clear full name
            </button>
          </>
        )}
      </div>

      <hr className="w-full h-1" />

      <div className="p-3 flex flex-col gap-2 items-center">
        <p>{count}</p>
        <button
          onClick={handleCountButtonClick}
          className="bg-blue-800 text-white p-3 rounded"
        >
          +2
        </button>
      </div>

      <hr className="w-full h-1" />

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

      <hr className="w-full h-1" />

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
