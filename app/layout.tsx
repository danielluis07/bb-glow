import type { Metadata } from "next";
import { Figtree, Cute_Font } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BB Glow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} bg-gradient-to-r from-slate-50 via-slate-50 to-slate-200`}>
        {children}
      </body>
      <GoogleAnalytics gaId="AW-10785596702" />
    </html>
  );
}
