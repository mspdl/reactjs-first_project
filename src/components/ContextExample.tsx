import { CountProvider } from "@/contexts/CountContext";
import { Header } from "./Header";

export const ContextExample = () => {
  return (
    <CountProvider>
      <Header />
    </CountProvider>
  );
};
