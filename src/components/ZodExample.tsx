import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "The name must have at least 2 characters" })
    .max(20),
  lastName: z.string().optional(),
  email: z.string().email(),
  age: z
    .number({ invalid_type_error: "Age needs to be a number" })
    .min(18)
    .max(130),
});

export const ZodExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <div className="mb-3">
          <input
            placeholder="First Name"
            {...register("name")}
            className="border-white p-3  text-black"
          />
          {errors.name && (
            <p className="text-red-400">{errors.name.message as string}</p>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="Last Name"
            {...register("lastName")}
            className="border-white p-3 text-black"
          />
          {errors.lastName && (
            <p className="text-red-400">{errors.lastName.message as string}</p>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="E-mail"
            {...register("email")}
            className="border-white p-3 text-black"
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message as string}</p>
          )}
        </div>
        <div className="mb-3">
          <input
            placeholder="Age"
            {...register("age", { valueAsNumber: true })}
            className="border-white p-3 text-black"
          />
          {errors.age && (
            <p className="text-red-400">{errors.age.message as string}</p>
          )}
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            className="p-3 mt-3 font-bold bg-blue-600 text-white rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
