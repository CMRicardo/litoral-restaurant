import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useState } from "react";

export const DropzoneUpload = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const buttonClasses = cn([
    "flex w-full py-4 items-center flex-col gap-4 justify-center rounded-md border border-dashed transition-all",
    isDraggingOver && "border-muted-foreground scale-105",
  ]);

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  });
  document.addEventListener("dragleave", (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  });
  return (
    <button className={buttonClasses}>
      <Upload className="h-4 w-4 text-muted-foreground" />
      <Label>Drop the product&apos;s picture here</Label>
      <span className="sr-only">Upload</span>
    </button>
  );
};
