type SimpleCardProps = {
  children: string;
  phrase: string;
  author?: string;
};

export const Card = ({ children, phrase, author }: SimpleCardProps) => {
  return (
    <div className="border-2 border-red-400 p-3 text-3xl m-1">
      <p className="italic">
        "{children} {phrase}"
      </p>
      <p className="text-xs text-right"> - {author ?? "Unkown author"}</p>{" "}
      {author && "zZz"}
    </div>
  );
};
