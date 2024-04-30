import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Providers } from "./providers";
import MobileSidebar from "@/components/layout/sidebar/MobileSidebar";
import OffCanvasContextProvider from "@/context/OffCanvasContextProvider";

export const metadata: Metadata = {
  title: "Hermestrack",
  description: "Track your daily transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-sidebar="false">
        <OffCanvasContextProvider>
          <Providers>
            <div className="sm:block hidden">
              <Sidebar />
            </div>
            <div className="sm:hidden block">
              <MobileSidebar />
            </div>
            {children}
          </Providers>
        </OffCanvasContextProvider>
      </body>
    </html>
  );
}
