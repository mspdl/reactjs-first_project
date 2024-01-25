import { CountContext, CountInitialDate } from "@/contexts/CountContext";
import { Header } from "./Header";

export const ContextExample = () => {
  return (
    <CountContext.Provider value={CountInitialDate}>
      <Header />
    </CountContext.Provider>
  );
};
