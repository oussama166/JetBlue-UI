import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "JetBlue | Airline Tickets, Flights & Airfare: Book Direct",
  description: "Flight like a bird with jetblue services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
