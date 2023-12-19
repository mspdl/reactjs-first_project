import Person from "./Person";

const PersonList = () => {
  return (
    <div className="flex items-center flex-col m-4">
      <h1 className="font-bold text-lg">Person List</h1>
      <Person
        name="Bill Gates"
        avatarUrl="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"
        roles={[
          "Tycoon",
          "Businessman",
          "CEO",
          "Investor",
          "Philanthropist",
          "Author",
        ]}
      />
      <Person
        name="Morgan Espindola"
        avatarUrl="https://github.com/mspdl.png"
        roles={[
          "Frontend developer",
          "Full stack developer",
        ]}
      />
      <Person 
        name="John Papa"
        roles={["unkown"]}
      />
    </div>
  );
};

export default PersonList;
