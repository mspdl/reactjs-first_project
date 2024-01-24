import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";

const ReducerExample = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddButton = () => {
    dispatch({
      type: "add",
      payload: {
        text: "New item",
      },
    });
  };

  return (
    <div className="">
      <button onClick={handleAddButton}>Add item</button>
      {list.map((item) => (
        <div>
          <input type="checkbox" checked={item.isDone} />{" "}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ReducerExample;
