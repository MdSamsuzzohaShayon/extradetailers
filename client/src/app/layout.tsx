import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./custom-bootstrap.scss";
import "./globals.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // <title>Professional Automobile Detailing Services</title>
  title: "Extra Detailers - Professional Automobile Detailing Services",
description: "Experience top-notch complete detailing services for your vehicle with Extra Detailers. Our experts will make your car shine inside and out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Header /> */}
        {children}

      </body>
    </html>
  );
}
