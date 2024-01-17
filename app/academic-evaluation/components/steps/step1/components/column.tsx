import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { z } from "zod";
import { step1formSchema } from "./mini-form";

export const data: z.infer<typeof step1formSchema>[] = [
  {
    subjectName: "python",
    level: "UG",
    courseHead: "PR",
    noOfHrsWeek: 41,
    noOfClassesConducted: 100,
    result: 100,
    term: "I",
    year: "Current",
  },
  {
    subjectName: "python",
    level: "UG",
    courseHead: "PR",
    noOfHrsWeek: 41,
    noOfClassesConducted: 100,
    result: 100,
    term: "I",
    year: "Current",
  },
];

export const columns: ColumnDef<z.infer<typeof step1formSchema>>[] = [
  {
    header: "Subject Name",
    accessorKey: "subjectName",
  },
  {
    header: "Level",
    accessorKey: "level",
  },
  {
    header: "Result",
    accessorKey: "result",
  },
  {
    header: "Year",
    accessorKey: "year",
  },
  {
    header: "Actions",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Menubar className="mx-2 rounded-full !h-[28px] !w-[28px] flex-shrink-0 justify-center ">
          <MenubarMenu>
            <MenubarTrigger className="rounded-full !h-full !w-full p-0 justify-center text-white active:text-primary">
              <MoreVertical className=" text-primary text-lg" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Delete</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    ),
  },
];
