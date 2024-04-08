"use client";

import { Upload } from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UploadButton } from "./upload-thing";

export const ProductImage = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Product Image</CardTitle>
        <CardDescription>Pick a nice image for your product</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="/placeholder.svg"
            width="300"
          />
          <div className="grid place-items-center px-16">
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload</span>
            </button>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
