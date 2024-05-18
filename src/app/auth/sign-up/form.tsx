import { type FC } from "react";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import DiscordButton from "~/components/auth/discord-button";
import { SubmitButton } from "~/components/auth/submit-button";
import { signUp } from "../actions";

interface Props {
  searchParams: Record<string, string>;
}

export const SignUpForm: FC<Props> = ({ searchParams }) => {
  return (
    <Card className="w-full md:max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {"message" in searchParams ? (
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{searchParams.message}</AlertDescription>
            </Alert>
          ) : null}
          <form id="sign-up-form" action={signUp} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoComplete="name" placeholder="John Smith" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" autoComplete="new-password" type="password" />
            </div>
          </form>
          <SubmitButton form="sign-up-form" className="w-full" pendingText="Creating account...">
            Create an account
          </SubmitButton>
          <DiscordButton />
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
