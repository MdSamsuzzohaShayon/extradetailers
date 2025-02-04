import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import Header from "@/components/layout/Header";
import "./custom-bootstrap.scss";
import "./globals.scss";
// import Footer from "@/components/layout/Footer";

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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
