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

type ListActions = AddAction | EditTextAction | CheckAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
  action.type;
  action.payload;

  return list;
};
