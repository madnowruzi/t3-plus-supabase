"use client";

import type { FC, PropsWithChildren } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import { TRPCReactProvider } from "~/lib/trpc/react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DirectionProvider dir="ltr">
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </DirectionProvider>
  );
};
