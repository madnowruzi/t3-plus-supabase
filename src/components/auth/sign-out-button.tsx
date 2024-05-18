import { redirect } from "next/navigation";
import { createClient } from "~/lib/supabase/server";
import { Button } from "~/components/ui/button";

export default function SignOutButton() {
  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/auth/sign-in");
  };

  return (
    <form action={signOut} className="inline-block">
      <Button>Sign out</Button>
    </form>
  );
}
