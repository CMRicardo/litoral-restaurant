"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Product } from "@/interfaces/product.interface";
import { DropzoneUpload } from "./dropzone-upload";

export const ProductImage = ({
  product = undefined,
}: {
  product?: Product;
}) => {
  return (
    <Card className="max-w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Product Image</CardTitle>
        <CardDescription>Pick a nice image for your product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={`Image of ${product?.name}`}
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            width="300"
            src={product?.pictureUrl || "/placeholder.svg"}
          />
          <div className="grid place-items-center">
            <DropzoneUpload />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
