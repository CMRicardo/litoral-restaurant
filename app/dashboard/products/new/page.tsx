import { NewProductForm } from "@/components/new-product-form";
import { getCategories } from "@/lib/categories/get-categories";

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
      <NewProductForm categories={categories} />
    </div>
  );
}
