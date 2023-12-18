import Circle from "./Circle";
import Square from "./Square";

const GeoForm = () => {
  return (
    <div className="max-w-xl">
      <h3 className="text-2xl font-bold text-center">Geometric Forms</h3>
      <div className="flex gap-2 p-3">
        <Square />
        <Circle />
      </div>
    </div>
  );
};

export default GeoForm;
