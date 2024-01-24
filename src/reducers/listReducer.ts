import { Item } from "@/data/Item";

type AddAction = {
  type: "add";
  payload: {
    text: string;
  };
};

type EditTextAction = {
  type: "edit";
  payload: {
    id: number;
    newText: string;
  };
};

type CheckAction = {
  type: "check";
  payload: {
    id: number;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type ListAction = AddAction | EditTextAction | CheckAction | RemoveAction;

export const listReducer = (list: Item[], action: ListAction) => {
  switch (action.type) {
    case "add":
      return [
        ...list,
        { id: list.length, text: action.payload.text, isDone: false },
      ];

    case "edit":
      return list.map((item) => {
        if (item.id === action.payload.id) item.text = action.payload.newText;
        return item;
      });

    case "check":
      return list.map((item) => {
        if (item.id === action.payload.id) item.isDone = !item.isDone;
        return item;
      });

    case "remove":
      return list.filter((item) => item.id !== action.payload.id);

    default:
      return list;
  }
};
