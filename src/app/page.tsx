import AdvancedCard from "@/components/AdvancedCard";
import { Card } from "@/components/SimpleCard";
import PersonList from "../components/PersonList";

const Page = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl mt-4">
      <Card>Text example</Card>
      <AdvancedCard>
        <>
          <h3 className="text-2xl italic text-center" >Text example</h3>
          <p className="text-xs text-right">- Unkown author</p>
        </>
      </AdvancedCard>
      <PersonList />
    </div>
  );
};

export default Page;
