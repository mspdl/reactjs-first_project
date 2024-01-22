import { useEffect, useState } from "react";

const EffectExample = () => {
  const [name, setName] = useState("Morgan");
  const [age, setAge] = useState(34);

  useEffect(() => {
    console.log("Activated useEffect com EffectExample component.");
  }, [age]);

  return (
    <div className="w-[50%]">
      <div className="mb-2 text-center text-2xl">
        My name is <span className="font-bold">{name}</span> and I'm{" "}
        <b>{age}</b> years old.
      </div>
      <hr />
      <button
        className="w-full border border-green-800 m-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setName("Peter")}
      >
        Change name to Peter
      </button>
      <button
        className="w-full border border-green-800 m-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setName("John")}
      >
        Change name to John
      </button>
      <button
        className="w-full border border-green-800 m-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setAge(10)}
      >
        Change age to 10
      </button>
      <button
        className="w-full border border-green-800 m-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setAge(28)}
      >
        Change age to 28
      </button>
    </div>
  );
};

export default EffectExample;
