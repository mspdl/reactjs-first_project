import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const ReducerExample = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [taskName, setTaskName] = useState("");

  const handleAddButton = () => {
    if (taskName.trim() === "") return false;
    dispatch({
      type: "add",
      payload: {
        text: taskName,
      },
    });
    setTaskName("");
    console.log(list);
  };

  const handleCheckItem = (itemId: number) => {
    console.log("checking item " + itemId);
    dispatch({
      type: "check",
      payload: {
        id: itemId,
      },
    });
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch({
      type: "remove",
      payload: { id: itemId },
    });
  };

  return (
    <div className="container max-w-2xl mx-auto ">
      <h1 className="text-center text-4xl font-bold">Task List</h1>
      <div className="flex border rounded-md border-gray-400 bg-gray-900 p-4 my-4">
        <input
          type="text"
          className="flex-1  border rounded-md border-white p-3 bg-transparent text-white outline-none"
          placeholder="Type a task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className="p-3 bg-blue-600 border border-blue-800 rounded-md mx-4 text-white"
          onClick={handleAddButton}
        >
          Add item
        </button>
      </div>
      {!list || list.length < 1 ? (
        <p className="text-center text-white text-2xl">Task list is empty</p>
      ) : (
        list.map((item) => (
          <div key={item.id}>
            <input
              onChange={() => handleCheckItem(item.id)}
              type="checkbox"
              checked={item.isDone}
            />{" "}
            <span className="text-xl">{item.text} </span>
            <button
              onClick={() => handleDeleteItem(item.id)}
            >{`<delete>`}</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ReducerExample;
