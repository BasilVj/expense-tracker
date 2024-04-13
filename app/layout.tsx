import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Providers } from "./providers";
import MobileSidebar from "@/components/layout/sidebar/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} data-sidebar="false">
        <Providers>
          <div className="sm:block hidden">
            <Sidebar />
          </div>
          <div className="sm:hidden block">
            <MobileSidebar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
