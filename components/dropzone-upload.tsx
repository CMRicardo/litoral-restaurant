"use client";
import { useCallback, useState } from "react";
import { Upload } from "lucide-react";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { LoadingSpinner } from "./ui/loading-spinner";

export const DropzoneUpload = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: () => {
        alert("Upload Completed");
      },
      onUploadError: () => {
        alert(`ERROR!`);
      },
      onUploadBegin: () => {
        alert("Upload Started");
      },
    },
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const buttonClasses = cn([
    "flex w-full py-4 items-center flex-col gap-4 justify-center rounded-md border border-dashed transition-all cursor-pointer",
    isDraggingOver && "border-muted-foreground scale-105",
  ]);

  globalThis.document.addEventListener("dragover", (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  });
  globalThis.document.addEventListener("dragleave", (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  });

  return !isUploading ? (
    <>
      <div {...getRootProps()} className={buttonClasses}>
        <input {...getInputProps()} />
        <Upload className="h-4 w-4 text-muted-foreground" />
        <Label>Drop the product&apos;s picture here</Label>
        <span className="sr-only">Upload</span>
      </div>
      <div className="mt-4">
        {files.length > 0 && (
          <Button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </Button>
        )}
      </div>
    </>
  ) : (
    <LoadingSpinner />
  );
};
