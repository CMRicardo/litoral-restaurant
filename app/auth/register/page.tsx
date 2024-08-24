"use client";

import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/register-form";

export default function Home() {
  return (
    <>
      <div className="max-h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid max-w-[320px] gap-6 lg:max-w-max">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">
                Register to Litoral Restaurant
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter your data below to create your account
              </p>
            </div>
            <RegisterForm />
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/" className="underline">
                Go to Login
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
    </>
  );
}
