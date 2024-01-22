import { useState } from "react";
import { Square } from "./Square";

const CleanUp = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-black font-bold text-4xl flex flex-col items-center py-[1000px]">
      <button
        className="border-4 bg-green-200 border-green-900 rounded-md p-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>

      {show && <Square />}
    </div>
  );
};

export default CleanUp;
