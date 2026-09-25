import type { Metadata } from "next";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

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
        <WorkoutProvider>
          <Navber />
          {children}
          <Footer />
           <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
