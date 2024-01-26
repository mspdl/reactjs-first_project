import { createContext } from "react";

type CountContext = {
  onlineCount: number;
  setOnlineCount: (number: number) => void;
};

export const CountContext = createContext<CountContext | null>(null);
