import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export const Users = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        console.log("Called finally()");
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl text-center pb-3">User list</h1>

      {loading && <p className="text-center font-bold">loading...</p>}
      {hasError && <p className="text-center font-bold">ERROR on API</p>}
      {!loading && users.length > 0 && (
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
      {!loading && users.length <= 0 && "There's no users to show"}
    </>
  );
};
