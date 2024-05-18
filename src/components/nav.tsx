import type { FC } from "react";
import { auth } from "~/server/auth";
import SignInButton from "~/components/auth/sign-in-button";
import SignOutButton from "~/components/auth/sign-out-button";
import Link from "next/link";

export const Nav: FC = async () => {
  const { user } = await auth();

  return (
    <nav>
      <div className="container flex flex-col gap-4 pt-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="select-none text-3xl font-extrabold tracking-tight">
              <span className="text-[hsl(280,100%,70%)]">T3</span> + Supabase
            </h1>
          </Link>
          <ul>
            <li>{user ? <SignOutButton /> : <SignInButton />}</li>
          </ul>
        </div>
        <div className="h-0 w-full border-b bg-white/30"></div>
      </div>
    </nav>
  );
};
