import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { env } from "~/env";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
      },
    },
  });
}
