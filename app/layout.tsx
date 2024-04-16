import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { ModalProvider } from "@/components/modal-provider";
import { ToastProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/Crisp-Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS",
  description: "Software as a service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
    <CrispProvider />
      <body className={inter.className}>
        <ModalProvider />
        <ToastProvider />

        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
