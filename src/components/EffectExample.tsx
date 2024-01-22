import { useState } from "react";

const EffectExample = () => {
  const [firstName, setFirstName] = useState("Morgan");
  const [lastName, setLastName] = useState("Espindola");
  const [age, setAge] = useState(34);

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="w-[40%]">
      <p className="text-center text-xl">
        My name is <b>{fullName}</b>.
        <br />
        I'm <b>{age}</b> year{age > 1 ? "s" : ""} old.
      </p>
      <hr />
      <button
        className="w-full border border-green-800 my-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setFirstName("Peter")}
      >
        Change name to Peter
      </button>
      <button
        className="w-full border border-green-800 my-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setFirstName("John")}
      >
        Change name to John
      </button>
      <button
        className="w-full border border-green-800 my-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setAge(10)}
      >
        Change age to 10
      </button>
      <button
        className="w-full border border-green-800 my-3 p-1 rounded block bg-green-300 text-green-800"
        onClick={() => setAge(28)}
      >
        Change age to 28
      </button>
    </div>
  );
};

export default EffectExample;
