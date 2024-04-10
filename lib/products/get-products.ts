import { db } from "../db";

import { Product } from "@/interfaces/product.interface";

export const getProducts = async (): Promise<{
  products: Product[];
  total: number;
}> => {
  const { rows: productsResult } = await db.execute({
    sql: `SELECT
    prod.id,
    prod.name,
    prod.price,
    prod.description,
    prod.active,
    cat.name as 'category',
    prod.createdAt,
    prod.updatedAt,
    prod.updatedBy,
    prod.pictureUrl
  FROM
    Products as prod
    join Categories as cat on prod.categoryId = cat.id
    ORDER BY cat.name
    LIMIT 10;`,
    args: [],
  });

  const { rows: countResult } = await db.execute(
    "select count(*) from Products;",
  );
  const totalProducts = Number(countResult[0]["count (*)"]);
  const products = productsResult as unknown as Product[];
  console.log(products);

  return {
    products,
    total: totalProducts,
  };
};
