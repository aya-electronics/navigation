import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageView from "./view";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aya Navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <PageView />
        </Suspense>
        <div className="h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
