import NavBar from "@/components/Navbar/navbar";
import { NextAuthProvider } from "@/wrappers/auth-provider";
import { QueryClientWrapper } from "@/wrappers/query-client-wrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../wrappers/theme-provider";
import "./(essential)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern College MCA",
  description: "Website Designed By Naresh Bhosale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="shortcut icon" href="/biglogo.svg" type="image/x-icon" />

      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryClientWrapper>
              <NavBar />
              <Toaster />
              <div className="pt-[60px]">{children}</div>
            </QueryClientWrapper>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
