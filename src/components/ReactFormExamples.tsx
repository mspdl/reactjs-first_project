import { SignUpForm } from "@/types/SignUpForm";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export const ReactFormExamples = () => {
  const { control, handleSubmit } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <p className="font-bold text-3xl text-center">React Form</p>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col center">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.invalid}
              style={{ backgroundColor: "#FFF", padding: 2, margin: 2 }}
            />
          )}
          rules={{ required: true, minLength: 2, maxLength: 20 }}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.invalid}
              style={{ backgroundColor: "#FFF", padding: 2, margin: 2 }}
            />
          )}
        />
        <Controller
          control={control}
          name="age"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.invalid}
              style={{ backgroundColor: "#FFF", padding: 2, margin: 2 }}
            />
          )}
          rules={{ required: true, minLength: 18 }}
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
