import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { kepOrganized } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios, { AxiosResponse } from "axios";
import { MoreVertical } from "lucide-react";

export const columns: ColumnDef<kepOrganized>[] = [
  {
    header: "Programm Title Title",
    accessorKey: "programmTitle",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Place",
    accessorKey: "place",
  },
  {
    header: "Organizer",
    accessorKey: "organizer",
  },
  {
    header: "Actions",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <ActionsCell row={row.original} />,
  },
];
const ActionsCell: React.FC<{ row: kepOrganized }> = ({ row }) => {
  const queryClient = useQueryClient();

  const addProfile = async (id: string) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const result: AxiosResponse = await axios.delete(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/kepOrganized/${id}`,
      config
    );
    return result.data;
  };
  const { mutate } = useMutation({
    mutationFn: addProfile,
    onSuccess: async (data) => {
      // Invalidate the relevant queries in the queryClient after successful delete
      await queryClient.invalidateQueries({
        queryKey: ["form-details-kepOrganized"],
      });
    },
  });

  return (
    <div className="flex items-center justify-center">
      <Menubar className="mx-2 rounded-full !h-[28px] !w-[28px] flex-shrink-0 justify-center">
        <MenubarMenu>
          <MenubarTrigger className="rounded-full !h-full !w-full p-0 justify-center text-white active:text-primary">
            <MoreVertical className="text-primary text-lg" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => mutate(row.id)}>Delete</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
