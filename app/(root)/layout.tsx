import type { Metadata } from "next";

import "../globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Providers } from "../providers";
import MobileSidebar from "@/components/layout/sidebar/MobileSidebar";
import OffCanvasContextProvider from "@/context/OffCanvasContextProvider";
import { Toaster } from "react-hot-toast";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import SearchFilterContextProvider from "@/context/SearchFilterContext";
import DatePickerContextProvider from "@/context/DatePickerContext";

export const metadata: Metadata = {
  title: "Hermestrack",
  description: "Application to Track your daily transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body data-sidebar="false">
          <OffCanvasContextProvider>
            <DatePickerContextProvider>
              <SearchFilterContextProvider>
                <Providers>
                  <div className="sm:block hidden">
                    <Sidebar />
                  </div>
                  <div className="sm:hidden block">
                    <MobileSidebar />
                  </div>
                  {children}
                  <Toaster position="bottom-right" />
                </Providers>
              </SearchFilterContextProvider>
            </DatePickerContextProvider>
          </OffCanvasContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
