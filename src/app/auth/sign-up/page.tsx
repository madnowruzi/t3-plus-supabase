import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { SignUpForm } from "./form";

export default async function SignUp({ searchParams }: { searchParams?: Record<string, string> }) {
  const { user } = await auth();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="container flex-1 md:flex md:items-center md:justify-center">
      <SignUpForm searchParams={searchParams ?? {}} />
    </div>
  );
}
