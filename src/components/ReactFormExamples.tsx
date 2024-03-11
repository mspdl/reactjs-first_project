import { Form, useForm } from "react-hook-form";

export const ReactFormExamples = () => {
  const { register, control } = useForm();

  const handleSucess = () => {
    alert("It worked successfully!");
  };

  const handleError = () => {
    alert("Some error happened!");
  };

  return (
    <div className="">
      <h1 className="text-3xl text-white font-bold text-center">React form</h1>
      <Form
        control={control}
        className="flex flex-col"
        encType="application/json"
        method="post"
        action={"https://jsonplaceholder.typicode.com/posts"}
        onSuccess={handleSucess}
        onError={handleError}
      >
        <input
          className="border border-white p-3 mb-2 text-black"
          {...register("title", { required: true })}
          placeholder="Title"
        />
        <input
          className="border border-white p-3 mb-2 text-black"
          {...register("body", { required: true })}
          placeholder="Body"
        />
        <input
          className="border border-white p-3 mb-2 text-black"
          {...register("userId", { required: true })}
          placeholder="User ID"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 mt-2 rounded-md">
          Send
        </button>
      </Form>
    </div>
  );
};
