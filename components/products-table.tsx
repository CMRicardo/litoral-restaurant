import { getProducts } from "@/lib/products/get-products";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import ProductRow from "./product-row";
import { Product } from "@/interfaces/product.interface";

export default async function ProductsTable({
  status = "all",
}: {
  status?: "all" | "active" | "inactive";
}) {
  let products: Product[] = [];
  const { products: all, total } = await getProducts();

  if (status === "all") products = all;
  if (status === "active") products = all.filter((product) => product.active);
  if (status === "inactive")
    products = all.filter((product) => !product.active);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>Manage your products</CardDescription>
      </CardHeader>
      <CardContent>
        {products.length === 0 && (
          <div className="text-center text-muted-foreground">
            No products found
          </div>
        )}
        {products.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">
                  Description
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <ProductRow key={product.id} {...product} />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>{total}</strong> products
        </div>
      </CardFooter>
    </Card>
  );
}
