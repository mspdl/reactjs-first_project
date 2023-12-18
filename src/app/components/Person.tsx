const getWeekday = () => {
  return new Intl.DateTimeFormat("default", { weekday: "long" }).format(
    new Date()
  );
};

type PersonProps = {
  name: string;
  avatarUrl: string;
  roles: string[];
  address?: string;
};

const Person = ({ name, avatarUrl, roles }: PersonProps) => {
  return (
    <div className="p">
      <p className="italic">{getWeekday()}</p>
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
