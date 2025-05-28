import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link className="flex gap-2 items-center" href="/">
          <Image alt="logo" src={"/logo.svg"} width={38} height={32} />
          <p className="text-primary-100">Prepwise</p>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
