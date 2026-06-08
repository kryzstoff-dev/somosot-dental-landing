import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./App";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Somosot Dental Cebu | Gentle & Affordable Dental Care",
  description:
    "Modern dental care in Cebu City offering braces, tooth extraction, cleaning, root canal, fillings, and patient-focused dental services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-slate-50 text-slate-950`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
