import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
import "../globals.css";
export const metadata = {
  title: "HermesTrack",
  description: "Application to Track your daily transactions",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-[#0f172a] flex justify-center items-center h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
