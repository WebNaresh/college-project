"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Bell } from "lucide-react";
import SingleNotify from "./SingleNotify";

export function Notification() {
  const UserList = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/users`,
      config
    );
    return data.data;
  };

  const { data } = useQuery({
    queryKey: ["userList"],
    queryFn: UserList,
  });

  console.log(`🚀 ~ data:`);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Bell className="cursor-pointer text-white text-sm" />
      </SheetTrigger>
      <SheetContent className="bg-gray-50">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Accept or reject incoming application.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 my-2 py-4">
          {data?.userList?.map((user: User) => (
            <SingleNotify user={user} />
          ))}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
