import { z } from "zod";

export const productFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, {
      message: "Description must be at least 3 characters long",
    })
    .max(255, { message: "Description must be at most 255 characters long" }),
  category: z.enum(["Desserts", "Entries", "Main dishes", "Drinks"], {
    required_error: "Please select a category",
  }),
  status: z.enum(["Active", "Inactive"], {
    required_error: "Please select a status",
  }),
  price: z.coerce
    .number()
    .min(1, { message: "Price must be equal or greater than 1" }),
});
