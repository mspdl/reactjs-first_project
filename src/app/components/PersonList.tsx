import Person from "./Person";

const PersonList = () => {
  return (
    <div className="flex items-center flex-col m-4">
      <h1 className="font-bold text-lg">Person List</h1>
      <Person />
    </div>
  );
};

export default PersonList;
