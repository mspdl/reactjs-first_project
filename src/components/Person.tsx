type PersonProps = {
  name: string;
  avatarUrl?: string;
  roles: string[];
  address?: string;
};

const Person = ({ name, avatarUrl = "https://cdn-icons-png.flaticon.com/512/6388/6388000.png", roles }: PersonProps) => {
  return (
    <div className="p-7 m-5 border-2">
      <h1 style={{ color: "blue", fontSize: "20px" }}>Name: {name}</h1>
      <img
        src={avatarUrl}
        alt={name + "'s profile picture"}
        className="max-w-sm"
      />
      <ul>
        {roles.map((role) => (
          <li className="list-disc">{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
