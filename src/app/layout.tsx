import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { Nav } from "~/components/nav";
import { Providers } from "./providers";
import "~/app/styles.css";

export const metadata = {
  title: "T3 + Supabase",
  description: "by Mohamad Nowruzi",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`} style={{ colorScheme: "dark" }}>
      <body className="flex min-h-dvh flex-col gap-8 font-sans antialiased">
        <Providers>
          <Nav />
          <main className="flex flex-1 flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
