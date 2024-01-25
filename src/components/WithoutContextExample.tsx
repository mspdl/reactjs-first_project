const Title = ({ label }: { label: string }) => {
  return <h1 className="text-4xl font-bold my-4">{label}</h1>;
};

const SubTitle = ({ label }: { label: string }) => {
  return <h2 className="text-2xl my-2">{label}</h2>;
};

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header>
      <Title label={title} />
      <SubTitle label={subtitle} />
    </header>
  );
};

export const WithoutContextExample = () => {
  const pageInfo = {
    title: "Title",
    subtitle: "This is a subtitle",
  };
  return (
    <div className="">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
};
