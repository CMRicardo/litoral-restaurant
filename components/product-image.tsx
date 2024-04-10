"use client";

import Image from "next/image";
import { Upload } from "lucide-react";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UploadButton, UploadDropzone } from "./upload-thing";
import { Product } from "@/interfaces/product.interface";
import { DropzoneUpload } from "./dropzone-upload";

export const ProductImage = (product: Product) => {
  return (
    <Card className="max-w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Product Image</CardTitle>
        <CardDescription>Pick a nice image for your product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={`Image of ${product.name}`}
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            width="300"
            src={product.pictureUrl || "/placeholder.svg"}
          />
          <div className="grid place-items-center">
            <DropzoneUpload />
            {/* <UploadDropzone
              className="flex aspect-square max-w-full items-center justify-center rounded-md border border-dashed border-slate-300"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            /> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
