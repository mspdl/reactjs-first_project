const getWeekday = () => {
  return new Intl.DateTimeFormat("default", { weekday: "long" }).format(
    new Date()
  );
};

const Person = () => {
  const personData = {
    name: "Bill Gates",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
    roles: [
      "Tycoon",
      "Businessman",
      "CEO",
      "Investor",
      "Philanthropist",
      "Author",
    ],
  };

  return (
    <>
      <p className="italic">{getWeekday()}</p>
      <h1 style={{ color: "blue", fontSize: "20px" }}>
        Name: {personData.name}
      </h1>
      <img
        src={personData.avatarUrl}
        alt={personData.name + "'s profile picture"}
        className="max-w-sm"
      />
      <ul>
        {personData.roles.map((role) => (
          <li className="list-disc">{role}</li>
        ))}
      </ul>
    </>
  );
};

export default Person;
