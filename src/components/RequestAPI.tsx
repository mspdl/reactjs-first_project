import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export const RequestAPI = () => {
  const [hasError, setHasError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log("API ERROR");
        setHasError(true);
      })
      .finally(() => {
        console.log("Called finally()");
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl text-center pb-3">User list</h1>

      {users.length <= 0 && !hasError && <p className="text-center font-bold">loading...</p>}
      {hasError && <p className="text-center font-bold">ERROR on API</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                <b>{user.name}</b>
                {user.email && ` (${user.email})`}
                {user.address.city && ` - lives in ${user.address.city}`}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
