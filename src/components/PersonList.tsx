import { personList } from "@/data/personList";
import { Person as PersonType } from "@/types/Person";
import Person from "./Person";

const PersonList = () => {
  return (
    <div className="flex items-center flex-col m-5">
      <h1 className="font-bold text-lg">Person List</h1>
      {personList.map(({ name, profession }: PersonType) => (
        <Person name={name} profession={profession} />
      ))}
    </div>
  );
};

export default PersonList;
