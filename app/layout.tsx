import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "3F Ingeniería y Consultoría",
  description: "Tecnología que impulsa negocios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${sora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}