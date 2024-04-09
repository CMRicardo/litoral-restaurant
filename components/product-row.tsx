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
import Link from "next/link";

export default function ProductRow({
  name,
  description,
  price,
  category,
  createdAt,
  active,
  id,
}: Product) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt={`Image of ${name}`}
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="hidden font-medium sm:table-cell">
        {description}
      </TableCell>
      <TableCell>
        {active ? (
          <Badge variant="default">Active</Badge>
        ) : (
          <Badge variant="outline">Archived</Badge>
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
            <Link href={`/dashboard/products/edit/${id}`}>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
