import type { Metadata } from "next";
import "./globals.css";
import Navber from "@/components/shared/Navber";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Fitness workout and planning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navber />
        {children}
      </body>
    </html>
  );
}