import { useEffect } from "react";

export const Square = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Square's scroll");
    });

    console.log("Square's useEffect");

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Square's scroll");
      });
      console.log("Square's clean up");
    };
  });
  return <div className="w-40 h-40 bg-red-500"></div>;
};
