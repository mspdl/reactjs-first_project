import { useEffect } from "react";

export const RequestAPI = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl">User list</h1>
    </div>
  );
};
