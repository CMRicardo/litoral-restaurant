import Image from "next/image";

import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { TableRow, TableCell } from "./ui/table";
import { Badge } from "./ui/badge";

import { Product } from "@/interfaces/product.interface";

export default function ProductRow({
  name,
  description,
  price,
  category,
  createdAt,
  active,
}: Product) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="https://ui.shadcn.com/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="font-medium">{description}</TableCell>
      <TableCell>
        {active ? (
          <Badge variant="default">Active</Badge>
        ) : (
          <Badge variant="outline">Draft</Badge>
        )}
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell className="hidden md:table-cell">{category}</TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(createdAt).toLocaleDateString()}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
