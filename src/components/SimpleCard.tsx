type SimpleCardProps = {
  children: string;
};

export const Card = ({ children }: SimpleCardProps) => {
  return (
    <div className="border-2 border-red-400 p-3 text-3xl">
      <p className="italic">"{children}"</p>
    </div>
  );
};
