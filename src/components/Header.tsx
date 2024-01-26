import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "@/contexts/CountContext";

export const Header = () => {

  const countCtx = useContext(CountContext);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Page title ({countCtx?.onlineCount})</h1>
      <OnlineUsers />
    </div>
  );
};
