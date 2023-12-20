type PersonProps = {
  name: string;
  profession: string;
};

const Person = ({ name, profession }: PersonProps) => {
  return (
    <div className="p-2 m-2 border-2">
      <h1 style={{ color: "blue", fontSize: "20px" }}>Name: {name}</h1>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default Person;
