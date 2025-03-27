import { achievements } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<achievements>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Special Achievements",
    accessorKey: "achievements",
  },
];
