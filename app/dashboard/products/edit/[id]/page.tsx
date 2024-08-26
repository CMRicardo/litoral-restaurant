import { getProductById } from "@/lib/products/get-product-by-id";
import { getCategories } from "@/lib/categories/get-categories";
import { Metadata } from "next";
import { EditProductForm } from "@/components/edit-product-form";

export const metadata: Metadata = {
  title: "Edit a product | Litoral Restaurant",
  description: "Developed by CMRicardo",
};

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProductById(Number(id));
  const categories = await getCategories();

  return (
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
      <EditProductForm product={product} categories={categories} />
    </div>
  );
}
