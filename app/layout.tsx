import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./(essential)/globals.css";
import { ThemeProvider } from "./wrappers/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
