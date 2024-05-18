import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";

import { signInDiscord } from "~/app/auth/actions";

export default function DiscordButton() {
  return (
    <form action={signInDiscord}>
      <Button variant="outline" className="inline-flex w-full items-center gap-2">
        <DiscordLogoIcon />
        <span>Sign in with Discord</span>
      </Button>
    </form>
  );
}
