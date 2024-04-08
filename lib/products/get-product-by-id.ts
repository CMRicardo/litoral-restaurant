import { Product } from "@/interfaces/product.interface";
import { db } from "@/lib/db";

export const getProductById = async (id: number) => {
  const { rows: productResult } = await db.execute({
    sql: `SELECT
    prod.id,
    prod.name,
    prod.price,
    prod.description,
    prod.active,
    cat.name as 'category',
    prod.createdAt,
    prod.updatedAt,
    prod.updatedBy
  FROM
    Products as prod
    join Categories as cat on prod.categoryId = cat.id
  WHERE
    prod.id = ?;`,
    args: [id],
  });
  return productResult[0] as unknown as Product;
};
