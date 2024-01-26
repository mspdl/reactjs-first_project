import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
  const countCtx = useContext(CountContext);

  const handleBanEverybody = () => {
    countCtx?.setOnlineCount(0);
  };

  return (
    <>
      <p className="">Online: {countCtx?.onlineCount}</p>
      <button className="border border-white p-3 rounded-md m-3 bg-gray-700 text-white" onClick={handleBanEverybody}>Ban everybody</button>
    </>
  );
};
