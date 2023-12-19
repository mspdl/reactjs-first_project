import { ReactNode } from "react";

type AdvancedCardProps = {
  children: ReactNode;
};

const AdvancedCard = ({ children }: AdvancedCardProps) => {
  return <div className="border-2 border-green-800 p-3 m-3 w-80">{children}</div>;
};

export default AdvancedCard;
