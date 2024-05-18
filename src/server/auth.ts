import { cache } from "react";
import { createClient } from "~/lib/supabase/server";

export const auth = cache(async () => {
  const client = createClient();
  const result = await client.auth.getUser();

  if (result.error) {
    if (result.error.status?.toString().startsWith("5")) {
      console.error(result.error);
    }

    return { user: null };
  }

  return { user: result.data.user };
});
