import { personList } from "@/data/personList";
import { Person as PersonType } from "@/types/Person";
import Person from "./Person";

const PersonList = () => {
  return (
    <div className="flex items-center flex-col m-5">
      <h1 className="font-bold text-xl">Person List</h1>
      {personList.map(({ name, profession }: PersonType) => (
        <Person name={name} profession={profession} />
      ))}
      <h2 className="font-bold text-lg">All the mathematicians</h2>
      {personList
        .filter((person) => person.profession === "mathematician")
        .map((mathematician) => (
          <p>{mathematician.name}</p>
        ))}
    </div>
  );
};

export default PersonList;
