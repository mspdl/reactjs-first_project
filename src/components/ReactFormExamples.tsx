import { SignUpForm } from "@/types/SignUpForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";

export const ReactFormExamples = () => {
  const { control, handleSubmit, setValue } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <p className="font-bold text-3xl text-center">React Form</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          control={control}
          name="name"
          rules={{ required: true, minLength: 2, maxLength: 20 }}
        />

        <Input control={control} name="lastName" />

        <Input
          control={control}
          name="age"
          rules={{ required: true, min: 18, max: 120 }}
        />

        <input
          className="border p-3 cursor-pointer border-white mt-3 bg-blue-700 hover:bg-blue-900 rounded-md w-full text-white text-xl"
          type="submit"
          value="Send"
        />
      </form>

      <button onClick={() => setValue('age', 18)}>Define as adult</button>
    </div>
  );
};
