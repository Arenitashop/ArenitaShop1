import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AIAssistant } from "@/components/AIAssistant";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArenitaShop - Coastal Commerce",
  description: "A sun-drenched, seaside marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
