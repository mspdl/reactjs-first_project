import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export const RequestAPI = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl text-center pb-3">User list</h1>

      {users.length <= 0 && <p className="text-center font-bold">loading...</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                <b>{user.name}</b> ({user.email}) - lives in {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
