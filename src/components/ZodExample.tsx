import { z } from "zod";

export const ZodExample = () => {
  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18).max(128),
  });

  type SignUpObject = z.infer<typeof SignUpForm>;

  const obj: SignUpObject = {
    name: "Morgan",
    lastName: "Espindola",
    age: 34,
  };

  return <div className=""></div>;
};
