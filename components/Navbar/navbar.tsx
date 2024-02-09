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
import {
  AlignJustify,
  CalendarCheck,
  CandlestickChart,
  CreditCard,
  GraduationCap,
  KanbanSquareDashed,
  LogOut,
  NotebookPen,
  User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { Notification } from "./Notification";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();

  const { data } = useSession();
  let array: {
    link: string;
    title: string;
    icon: JSX.Element;
    isVisible?: Boolean;
  }[] = [
    {
      link: "/academic-evaluation",
      title: "Academic Evaluation",
      icon: <GraduationCap />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/academic-intutivenes-assets",
      title: "Academic Intuitiveness Assets",
      icon: <NotebookPen />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/academic-intutivenes",
      title: "Academic Intuitiveness",
      icon: <NotebookPen />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/academic-assets",
      title: "Academic Assets",
      icon: <CandlestickChart />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/academic-duties",
      title: "Academic Duties",
      icon: <KanbanSquareDashed />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/confirmation",
      title: "Confirm Your Form",
      icon: <CalendarCheck />,
      isVisible: data?.user?.role === "Teacher" ? false : true,
    },
    {
      link: "/hod",
      title: "Application",
      icon: <CreditCard />,
      isVisible: data?.user?.role === "HOD" ? false : true,
    },
  ];
  const { data: session } = useSession();
  console.log(`🚀 ~ file: navbar.tsx:88 ~ session:`, session);

  return (
    <div className="h-[60px] w-full flex justify-between bg-primary items-center fixed z-50">
      <div className="flex gap-2 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <AlignJustify className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-primary flex flex-col h-full" side="left">
            <SheetHeader>
              <SheetTitle className="text-white">
                Modern College MCA Department
              </SheetTitle>
            </SheetHeader>
            {session === null ? (
              <div className="flex-1 justify-center items-center flex">
                <Image
                  src={"/Log.svg"}
                  height={300}
                  width={300}
                  alt="user is not logged in"
                />
              </div>
            ) : (
              <>
                <div className="flex-1 border border-secondary rounded-lg">
                  {array.map((e, index) => {
                    return (
                      <SheetClose key={index} asChild>
                        <Link
                          href={e.link}
                          className={`${
                            e.isVisible === true ? "hidden" : "flex"
                          } w-full border-b border-secondary justify-between px-8 py-4 text-white flex-1`}
                        >
                          {e.title}
                          {e.icon}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </>
            )}

            <SheetFooter className="!justify-between">
              {session?.user && (
                <SheetClose asChild>
                  <Button
                    variant={"secondary"}
                    className="text-primary gap-2"
                    type="submit"
                    onClick={() => {
                      signOut({ redirect: false });
                      router.push("/login");
                    }}
                  >
                    <LogOut size={18} />
                    Log-out
                  </Button>
                </SheetClose>
              )}
              <SheetClose asChild>
                <ThemeToggle />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <h2 className="text-white font-bold">Modern College MCA Department</h2>
      </div>

      <div className="flex items-center gap-3">
        {session?.user?.role === "HOD" && <Notification />}

        <Menubar className="mx-2 rounded-full !h-[28px] !w-[28px] flex-shrink-0 justify-center ">
          <MenubarMenu>
            <MenubarTrigger className="rounded-full !h-full !w-full p-0 justify-center text-white active:text-primary cursor-pointer">
              <User className=" text-primary text-lg" />
            </MenubarTrigger>
            <MenubarContent>
              {session?.user && (
                <>
                  <Link href={"/profile"}>
                    <MenubarItem>Profile</MenubarItem>
                  </Link>
                </>
              )}

              {(session?.user === null || session === null) && (
                <>
                  <Link className=" cursor-pointer" href={"/login"}>
                    <MenubarItem className="cursor-pointer">Login</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link className=" cursor-pointer" href={"/signup"}>
                    <MenubarItem className="cursor-pointer">Signup</MenubarItem>
                  </Link>
                </>
              )}

              {session?.user && (
                <>
                  <MenubarItem
                    className="cursor-pointer"
                    onClick={async () => {
                      await signOut({ redirect: false });
                      router.push("/login");
                    }}
                  >
                    Sign-Out
                  </MenubarItem>
                </>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default NavBar;
