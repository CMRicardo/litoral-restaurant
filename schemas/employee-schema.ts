import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z
    .string({
      required_error: "Please enter the first name",
    })
    .min(3, {
      message: "Please enter a valid first name",
    }),
  lastName: z.string().min(3, {
    message: "Please enter a valid last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  role: z.number(),
  password: z.string().min(8),
});
