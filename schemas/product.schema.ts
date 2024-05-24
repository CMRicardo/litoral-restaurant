import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }),
  description: z.string().min(5, { message: "Description is too short" }),
  category: z.string({ required_error: "Please select a category" }),
  status: z.string({ required_error: "Please select a status" }),
  price: z.coerce.number().positive(),
  imageUrl: z.string().url().optional(),
});
