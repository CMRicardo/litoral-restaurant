import { Category } from "@/interfaces/category.interface";
import { db } from "../db";
import { unstable_noStore } from "next/cache";

export const getCategories = async () => {
  unstable_noStore();
  const { rows: categoriesResult } = await db.execute({
    sql: "SELECT * FROM Categories;",
    args: [],
  });
  return categoriesResult as unknown as Category[];
};
