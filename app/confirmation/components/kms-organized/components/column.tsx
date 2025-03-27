import { kepOrganized } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<kepOrganized>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
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
];
