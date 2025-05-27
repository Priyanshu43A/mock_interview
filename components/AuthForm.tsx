"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "./FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
//import { Input } from "@/components/ui/input";

const AuthFormSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up" ? z.string().min(3).max(50) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = AuthFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        // TODO: Implement sign-up logic here
        console.log("Sign up values:", values);
        toast.success("Account created successfully!");
        router.push("/sign-in");
      } else {
        // TODO: Implement sign-in logic here
        console.log("Sign in values:", values);
        toast.success("Signed in successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Authentication failed. Please try again.");
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col items-center gap-6 card py-14 px-10 ">
        <div className="flex gap-2 items-center justify-center flex-row">
          <Image
            src="/logo.svg"
            alt="logo"
            width={36}
            height={32}
            className="object-contain"
          />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practice job interviews with power of AI</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full mt-4 form space-y-8"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            className="font-bold text-user-primary ml-1"
            href={isSignIn ? "/sign-up" : "/sign-in"}
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
