import { CountContext } from "@/contexts/CountContext";
import { useState } from "react";
import { Header } from "./Header";

export const ContextExample = () => {
  const [onlineCount, setOnlineCount] = useState(92);

  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      <Header />
    </CountContext.Provider>
  );
};
