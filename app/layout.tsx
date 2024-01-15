import NavBar from "@/components/Navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en" suppressHydrationWarning>
      <link rel="shortcut icon" href="/biglogo.svg" type="image/x-icon" />

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="pt-[60px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
