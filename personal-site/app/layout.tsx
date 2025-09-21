import type { Metadata } from "next";
import { Lexend, Bodoni_Moda } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from '../components/Header';
import Cursor from "../components/Cursor";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kat Terranova",
  description: "Personal website of Kat Terranova, a frontend engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="noise-bg p-8 pb-20 gap-16 sm:p-20 wrapper">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Cursor />
            <Header />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
