import { responsibilityDepartment } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const departmentColumns: ColumnDef<responsibilityDepartment>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Responsibilities",
    accessorKey: "responsibility",
  },
];
