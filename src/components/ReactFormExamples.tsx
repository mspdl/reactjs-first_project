import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  lastName: string;
  age: number;
};

export const ReactFormExamples = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <p className="font-bold text-3xl text-center">React Form</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          className="block border p-3 border-white rounded-md mt-3 text-black"
          type="text"
          {...register("name", { required: true, minLength: 2, maxLength: 20 })}
          placeholder="Type your name"
        />
        <input
          className="block border p-3 border-white rounded-md mt-3 text-black"
          type="text"
          {...register("lastName")}
          placeholder="Type your last name"
        />
        <input
          className="block border p-3 border-white rounded-md mt-3 text-black"
          type="number"
          {...register("age", { required: true, min: 18, max: 120 })}
          placeholder="Type your age"
        />

        <input
          className="border p-3 cursor-pointer border-white mt-3 bg-blue-700 hover:bg-blue-900 rounded-md w-full text-white text-xl"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
