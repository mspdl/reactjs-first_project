import Square, { Circle } from "./components/Geo";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Hello World!</h1>
      <h3>Another text</h3>

      <Square />
      <Circle />
    </div>
  );
};

export default Page;
