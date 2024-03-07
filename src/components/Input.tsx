import { SignUpForm } from "@/types/SignUpForm";
import { UseControllerProps, useController } from "react-hook-form";

export const Input = (props: UseControllerProps<SignUpForm>) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="my-3">
      <input
        {...field}
        className={`border ${
          fieldState.invalid ? "border-red-700" : "border-white"
        } p-3 text-black`}
      />
      {fieldState.invalid && <p>Invalid</p>}
      {fieldState.error?.type === "required" && <p>This field is required</p>}
    </div>
  );
};
