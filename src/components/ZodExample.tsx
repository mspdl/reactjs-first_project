import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpFormSchema = z.object({
  name: z.string().min(2).max(20),
  lastName: z.string().optional(),
  age: z.number().min(18).max(130),
});

export const ZodExample = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm = () => {
    alert("Sending data...");
  };

  return (
    <div className="">
      <h1 className="p-3 text-2xl font-bold text-white text-center">
        SignUp Form
      </h1>
      <form onSubmit={handleSubmit(handleSignUpForm)} className="flex flex-col">
        <input
          {...register("name")}
          className="border-white p-3 mb-3 text-black"
        />
        <input
          {...register("lastName")}
          className="border-white p-3 mb-3 text-black"
        />
        <input
          {...register("age", { valueAsNumber: true })}
          className="border-white p-3 mb-3 text-black"
        />
        <input
          type="submit"
          value="Register"
          className="p-3 mt-3 font-bold bg-blue-600 text-white rounded-md"
        />
      </form>
    </div>
  );
};
