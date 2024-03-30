"use client";

import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Litoral Restaurant - Login
      </h1>
      <section className="flex flex-col items-center justify-center mt-8">
        <LoginForm />
      </section>
    </>
  );
}
