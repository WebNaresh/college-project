import { cActivity } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<cActivity>[] = [
  {
    header: "Sr No",
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Name of the Activity",
    accessorKey: "nameOfActivity",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
];
