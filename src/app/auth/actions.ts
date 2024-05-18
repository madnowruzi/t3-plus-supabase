"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "~/lib/supabase/server";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    return redirect("/auth/sign-in?message=Could not authenticate user");
  }

  return redirect("/");
};

export const signInDiscord = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `http://localhost:3000/api/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
    return;
  }

  if (data.url) {
    redirect(data.url);
  }

  redirect("/");
};

export const signUp = async (formData: FormData) => {
  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/api/auth/callback`,
    },
  });

  if (error) {
    // TODO: this part is quite brittle, maybe there is something better to check?
    if (error.message === "User already registered") {
      return redirect("/auth/sign-up?message=User already registered!");
    }

    console.error(error);

    return redirect("/auth/sign-up?message=Error while signing up!");
  }

  return redirect("/auth/sign-up/success");
};
