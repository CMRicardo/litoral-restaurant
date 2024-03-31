"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const handleOnGoogle = () => {
    toast({
      title: "Login with Google",
      description: "Haven't implemented yet :(",
      duration: 2000,
    });
  };
  const handleOnSubmit = () => {
    toast({
      title: "Login",
      description: "Successful, redirecting...",
      duration: 2000,
    });
    router.push("/dashboard");
  };
  return (
    <div className="max-h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid max-w-[320px] gap-6 lg:max-w-max">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login to Litoral Restaurant</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@mail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            <Button onClick={handleOnSubmit} type="submit" className="w-full">
              Login
            </Button>
            <Button
              onClick={handleOnGoogle}
              variant="outline"
              className="w-full"
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login-background.webp"
          alt="Image"
          width="1280"
          height="720"
          priority
          className="h-full max-h-screen w-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
