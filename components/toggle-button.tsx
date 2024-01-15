"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      //   setTheme("dark");
    }
  };
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className="gap-2 flex">
      <Button
        suppressHydrationWarning
        onClick={() => toggleMode()}
        variant="outline"
        size="sm"
      >
        <SunIcon className="h-[1.2rem] text-primary w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] text-primary w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
