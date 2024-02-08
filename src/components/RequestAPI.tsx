import { useEffect, useState } from "react";
import { Users } from "./Users";
import { Posts } from "./Posts";

export const RequestAPI = () => {
  return (
    <div className="pt-5">
      <Users />
      <hr className="my-5" />
      <Posts />
    </div>
  );
};
