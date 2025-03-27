import { irg } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<irg>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
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
    header: "Amount",
    accessorKey: "amountRecieved",
  },
];
