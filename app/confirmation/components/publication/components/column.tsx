import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Name Of Journal",
    accessorKey: "name",
  },
  {
    header: "ISSN / ISSBN No",
    accessorKey: "issnOrIssbnNo",
  },
  {
    header: "Indexed In",
    accessorKey: "indexedIn",
  },
];
