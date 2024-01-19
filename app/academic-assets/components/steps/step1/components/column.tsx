import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { irg } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios, { AxiosResponse } from "axios";
import { format } from "date-fns";
import { MoreVertical } from "lucide-react";

export const columns: ColumnDef<irg>[] = [
  {
    header: "Nature",
    accessorKey: "natureOfWork",
  },
  {
    header: "Agency",
    accessorKey: "agency",
  },
  {
    header: "Amount",
    accessorKey: "amountRecieved",
  },
  {
    header: "Start",
    accessorKey: "startDate",
    cell: ({ row }) => (
      <div className="flex justify-center">
        {format(row.original.startDate, "MMMM d, yyyy")}
      </div>
    ),
  },
  {
    header: "End",
    accessorKey: "endDate",
    cell: ({ row }) => (
      <div className="flex justify-center">
        {format(row.original.endDate, "MMMM d, yyyy")}
      </div>
    ),
  },
  {
    header: "Actions",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <ActionsCell row={row.original} />,
  },
];
const ActionsCell: React.FC<{ row: irg }> = ({ row }) => {
  const queryClient = useQueryClient();

  const addProfile = async (id: string) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const result: AxiosResponse = await axios.delete(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/irg/${id}`,
      config
    );
    return result.data;
  };
  const { mutate } = useMutation({
    mutationFn: addProfile,
    onSuccess: async (data) => {
      // Invalidate the relevant queries in the queryClient after successful delete
      await queryClient.invalidateQueries({
        queryKey: ["form-details-irg"],
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
