import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { SignInForm } from "./form";

export default async function SignIn({ searchParams }: { searchParams?: Record<string, string> }) {
  const { user } = await auth();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="container flex-1 md:flex md:items-center md:justify-center">
      <SignInForm searchParams={searchParams ?? {}} />
    </div>
  );
}
