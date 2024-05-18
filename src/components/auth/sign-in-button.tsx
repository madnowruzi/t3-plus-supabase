import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function SignInButton() {
  return (
    <Button asChild>
      <Link href="/auth/sign-in">Sign in/up</Link>
    </Button>
  );
}
