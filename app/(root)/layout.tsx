import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import { Hanken_Grotesk } from "@next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "JetBlue | Airline Tickets, Flights & Airfare: Book Direct",
  description: "Flight like a bird with jetblue services",
};

const Hank = Hanken_Grotesk({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(Hank.className, "bg-slate-100")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
