"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginForm() {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Must be at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "ricardo@gmail.com",
      password: "12345678",
    },
  });
  const handleOnGoogle = () => {
    toast.error("Google login is not available yet.");
  };
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success(
      <div>
        <span className="text-lg font-bold">Login successful</span>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </div>,
    );
    router.push("/dashboard");
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
          <div className="grid gap-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </Form>
      <Button onClick={handleOnGoogle} variant="outline" className="w-full">
        Login with Google
      </Button>
    </>
  );
}
