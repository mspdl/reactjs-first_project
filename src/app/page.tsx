"use client";

import { Axios } from "@/components/Axios";

const Page = () => {
  return (
    <div className="min-w-screen min-h-screen px-5 flex flex-col gap-2 justify-center items-center bg-gray-600">
      <Axios />
    </div>
  );
};

export default Page;
