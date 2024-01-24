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

  const handleEditItem = (itemId: number) => {
  
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch({
      type: "remove",
      payload: { id: itemId },
    });
  };

  return (
    <div className="container max-w-2xl mx-auto flex flex-col h-[95%]">
      <h1 className="text-center text-4xl font-bold">Task List</h1>
      <div className="flex border rounded-md border-gray-400 bg-gray-900 p-4 mt-2">
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
      <hr className="my-3" />
      <div className="flex-1">
        {!list || list.length < 1 ? (
          <p className="text-center text-white text-2xl">Task list is empty.</p>
        ) : (
          list.map((item) => (
            <div
              className="flex border-b border-gray-500 py-2 items-center"
              key={item.id}
            >
              <input
                onChange={() => handleCheckItem(item.id)}
                onClick={() => handleCheckItem(item.id)}
                type="checkbox"
                defaultChecked={item.isDone}
                className="w-4 h-4"
              />{" "}
              <span className="flex-1 text-xl pl-2">{item.text}</span>
              <button
                className=" hover:text-white"
                onClick={() => handleEditItem(item.id)}
              >{`<edit>`}</button>
              <button
                className="px-2 hover:text-white"
                onClick={() => handleDeleteItem(item.id)}
              >{`<delete>`}</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReducerExample;
