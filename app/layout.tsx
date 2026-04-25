import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "HopeFront | Premium NGO & Charity Website Template",
  description: "A production-ready, highly responsive NGO template designed to build trust and inspire action. Perfect for charities, nonprofits, and fundraising campaigns.",
  keywords: "NGO, Non-profit, Charity, Fundraising, ThemeForest Template, React, Next.js",
  authors: [{ name: "Ahmed Saffar", url: "https://itsahmed.tech" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <div className="noise-overlay"></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
