import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amazon Rainforest Bird Species",
  description: "Explore the diverse bird species of the Amazon rainforest and their conservation status",
};

export default function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </body>
  );
}
