import { patent } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const patentsColumn: ColumnDef<patent>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Application Date",
    accessorKey: "dateOfApplication",
    cell: ({ row }) => (
      <div className="flex justify-center">
        {format(row.original.dateOfApplication, "MMMM d, yyyy")}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "rightStatus",
  },
  {
    header: "Commercialized",
    accessorKey: "isCommercialized",
    cell: ({ row }) => (
      <div className="flex justify-center">
        {" "}
        {row.original.isCommercialized === true ? "Yes" : "No"}
      </div>
    ),
  },
];
