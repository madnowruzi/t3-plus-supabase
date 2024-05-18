import type { FC } from "react";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import DiscordButton from "~/components/auth/discord-button";
import { SubmitButton } from "~/components/auth/submit-button";
import { signIn } from "../actions";

interface Props {
  searchParams: Record<string, string>;
}

export const SignInForm: FC<Props> = ({ searchParams }) => {
  return (
    <Card className="w-full md:max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>Enter your credentials below to sign into your account.</CardDescription>
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
          <form action={signIn} id="sign-in-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </form>
          <SubmitButton form="sign-in-form" className="w-full" pendingText="Signing in...">
            Sign in
          </SubmitButton>
          <DiscordButton />
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
