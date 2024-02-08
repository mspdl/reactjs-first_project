"use client";

import { RequestAPI } from "@/components/RequestAPI";

const Page = () => {
  return (
    <div className="min-w-screen min-h-screen px-5 flex flex-col gap-2 justify-center items-center bg-gray-600">
      <RequestAPI />
    </div>
  );
};

export default Page;
