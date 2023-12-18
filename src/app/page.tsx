import GeoForm from "./components/GeoForms";
import PersonList from "./components/PersonList";

const Page = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl mt-4">
      <h1 className="font-bold text-2xl">Hello World!</h1>
      <h3>Another text</h3>

      <GeoForm />
      <PersonList />
    </div>
  );
};

export default Page;
