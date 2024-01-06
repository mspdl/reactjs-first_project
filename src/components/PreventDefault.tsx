import { FormEvent } from "react";

const PreventDefault = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("sending form");
  };

  return (
    <>
      <h1 className="text-4xl mb-3">Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input className="ml-3" type="submit" value="Send" />
      </form>
    </>
  );
};

export default PreventDefault;
