"use client";

import CustomButton from "@/components/CustomButton";

const Page = () => {
  const handleClickButton1 = () => alert("Clicked on button 1");
  const handleClickButton2 = () => alert("Clicked on button 2");
  const handleClickButton3 = () => alert("Clicked on button 3");

  return (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <CustomButton label="Click here 1" clickMe={handleClickButton1} />
      <CustomButton label="Click here 2" clickMe={handleClickButton2} />
      <CustomButton label="Click here 3" clickMe={handleClickButton3} />
    </div>
  );
};

export default Page;
