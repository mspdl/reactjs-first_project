import { Item } from "@/data/Item";
import { useState } from "react";

const ReducerExample = () => {
  const [list, setList] = useState<Item[]>([]);

  const addNewItem = (text: string) => {
    setList([...list, { id: list.length, text, isDone: false }]);
  };

  const editItemText = (itemId: number, newText: string) => {
    setList(
      list.map((item) => {
        if (item.id === itemId) item.text = newText;
        return item;
      })
    );
  };

  const checkItem = (itemId: number) => {
    setList(
      list.map((item) => {
        if (item.id === itemId) item.isDone = !item.isDone;
        return item;
      })
    );
  };

  const removeItem = (itemId: number) => {
    setList(list.filter((item) => item.id !== itemId));
  };

  return <div className=""></div>;
};

export default ReducerExample;
