"use client";
import { ThemeToggle } from "@/components/toggle-button";
// NavBar.tsx
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, LogOut, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  let array: { link: string; title: string; icon: JSX.Element }[] = [
    {
      link: "/test",
      title: "test",
      icon: <AlignJustify />,
    },
  ];
  const { setTheme, themes, theme, systemTheme } = useTheme();

  return (
    <div className="h-[60px] w-full flex justify-between bg-primary items-center">
      <div className="flex gap-4 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <AlignJustify className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="bg-primary flex flex-col h-full !max-w-[80vw]"
            side="left"
          >
            <SheetHeader>
              <SheetTitle className="text-white">
                Modern College MCA Department
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 border border-secondary rounded-lg">
              {array.map((e, index) => (
                <Link
                  key={index}
                  href={e.link}
                  className="w-full flex border-b border-secondary justify-between px-8 py-4 text-white flex-1"
                >
                  {e.title}
                  {e.icon}
                </Link>
              ))}
            </div>
            <SheetFooter className="!justify-between">
              <SheetClose asChild>
                <Button
                  variant={"secondary"}
                  className="text-primary gap-2"
                  type="submit"
                >
                  <LogOut size={18} />
                  Log-out
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <ThemeToggle />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <h2 className="text-white font-bold">Modern College MCA Department</h2>
      </div>
      <Button>
        <User className=" text-white" />
      </Button>
    </div>
  );
};

export default NavBar;
