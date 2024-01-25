"use client";

import { WithoutContextExample } from "@/components/WithoutContextExample";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center bg-gray-600">
      <WithoutContextExample />
    </div>
  );
};

export default Page;
