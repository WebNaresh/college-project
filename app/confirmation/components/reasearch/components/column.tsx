import { reasearch } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<reasearch>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Scheme Title",
    accessorKey: "scheme",
  },
  {
    header: "Agency",
    accessorKey: "agency",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Date of Awarded / Recieved",
    accessorKey: "date",
    cell: ({ row }) => (
      <div className="flex justify-center">
        {format(row.original.date, "MMMM d, yyyy")}
      </div>
    ),
  },
  {
    header: "Grant Recieved",
    accessorKey: "grantRecieved",
  },
];
