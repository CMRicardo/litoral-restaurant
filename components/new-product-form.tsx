"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { ProductImage } from "@/components/product-image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Category } from "@/interfaces/category.interface";

export const NewProductForm = ({ categories }: { categories: Category[] }) => {
  const POSSIBLE_STATUSES = ["Active", "Inactive"];
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" })
      .max(100, { message: "Name must be at most 100 characters long" }),
    description: z
      .string()
      .min(3, {
        message: "Description must be at least 3 characters long",
      })
      .max(255, { message: "Description must be at most 255 characters long" }),
    category: z.enum(["Desserts", "Entries", "Main dishes", "Drinks"], {
      required_error: "Please select a category",
    }),
    status: z.enum(["Active", "Inactive"], {
      required_error: "Please select a status",
    }),
    price: z.coerce
      .number()
      .min(1, { message: "Price must be equal or greater than 1" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success(
      <div>
        <span>Product created successfully!</span>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </div>,
    );
  };
  const onDiscard = () => {
    if (!form.formState.isDirty) {
      toast.error("Product discarded");
      // TODO: Redirect to the products page
      return;
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4 py-4">
          <Link href="/dashboard/products">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-7 w-7"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            New Product
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button
              onClick={onDiscard}
              type="button"
              variant="outline"
              size="sm"
            >
              Discard
            </Button>
            <Button type="submit" size="sm">
              Save Product
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Edit details of the product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product Info</CardTitle>
                <CardDescription>
                  What category is this product in?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger aria-label="Select category">
                                <SelectValue
                                  placeholder={"Select a category"}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem
                                    key={category.id}
                                    value={category.name}
                                  >
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger aria-label="Select status">
                                <SelectValue placeholder={"Select a status"} />
                              </SelectTrigger>
                              <SelectContent>
                                {POSSIBLE_STATUSES.map((status) => (
                                  <SelectItem
                                    key={status}
                                    value={status}
                                    className="capitalize"
                                  >
                                    {status}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Price</CardTitle>
                <CardDescription>Edit the price of the product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <ProductImage />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 py-4 md:hidden">
          <Button onClick={onDiscard} type="button" variant="outline" size="sm">
            Discard
          </Button>
          <Button type="submit" size="sm">
            Save Product
          </Button>
        </div>
      </form>
    </Form>
  );
};
