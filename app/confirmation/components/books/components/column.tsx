import { Books } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Books>[] = [
  {
    header: "Sr No",
    accessorKey: "actions", // Use a different accessorKey for actions
    cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
  },
  {
    header: "Book Title",
    accessorKey: "bookTitle",
  },
  {
    header: "Title with Page no",
    accessorKey: "titleWithPageNo",
  },
  {
    header: "Publisher Name",
    accessorKey: "publisherName",
  },
  {
    header: "Editor Name",
    accessorKey: "editorName",
  },
  {
    header: "ISSN / ISSBN No",
    accessorKey: "issnOrIssbnNo",
  },
  {
    header: "Co-Authors",
    accessorKey: "detailOfCoAuthors",
  },
  {
    header: "Publishing Year",
    accessorKey: "publishingYear",
  },
  {
    header: "Publishing Month",
    accessorKey: "publishingMonth",
  },
];
