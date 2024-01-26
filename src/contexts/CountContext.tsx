import { ReactNode, createContext, useState } from "react";

type CountContext = {
  onlineCount: number;
  setOnlineCount: (number: number) => void;
};

export const CountContext = createContext<CountContext | null>(null);

type CountProviderProps = { children: ReactNode };
export const CountProvider = ({ children }: CountProviderProps) => {
  const [onlineCount, setOnlineCount] = useState(45);
  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      {children}
    </CountContext.Provider>
  );
};
