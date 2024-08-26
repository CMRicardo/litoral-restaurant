import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { getProductById } from "@/lib/products/get-product-by-id";
import { getCategories } from "@/lib/categories/get-categories";
import { ProductImage } from "@/components/product-image";
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
  const {
    name,
    description,
    price,
    active,
    category,
    createdAt,
    updatedAt,
    updatedBy,
  } = product;

  const categories = await getCategories();

  return (
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
      <EditProductForm product={product} categories={categories} />
    </div>
  );
}
