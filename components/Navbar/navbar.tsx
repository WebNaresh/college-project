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
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";

type Props = {};

const NavBar = (props: Props) => {
  let array: { link: string; title: string; icon: JSX.Element }[] = [
    {
      link: "/test",
      title: "test",
      icon: <AlignJustify />,
    },
  ];

  return (
    <div className="h-[60px] w-full flex justify-between bg-primary items-center fixed">
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
      <Menubar className="mx-2 rounded-full !h-10 !w-10 flex-shrink-0 justify-center ">
        <MenubarMenu>
          <MenubarTrigger className="rounded-full !h-full !w-full p-0 justify-center text-white active:text-primary">
            <User className=" text-primary text-lg" />
          </MenubarTrigger>
          <MenubarContent>
            <Link href={"/profile"}>
              <MenubarItem>Profile</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href={"/login"}>
              <MenubarItem>Login</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href={"/signup"}>
              <MenubarItem>Signup</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default NavBar;
