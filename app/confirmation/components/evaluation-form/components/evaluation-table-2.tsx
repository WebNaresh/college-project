import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { RowItemInteferance } from "./interface";

type Props = {
  header: RowItemInteferance;
  data: RowItemInteferance[];
};

const AdvanceEvaluationTable = ({ header, data }: Props) => {
  return (
    <Table className={`border border-black`}>
      <TableHeader>
        <TableRow>
          {header.data.map((doc, i) => (
            <TableHead
              className={cn(
                `text-center border-black border-r text-black border-b font-bold ${
                  header.data.length === i + 1 && "border-r-0"
                }`,
                header.className
              )}
              key={i}
            >
              {doc}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            className={cn(row.className, "border-b border-black")}
            key={rowIndex}
          >
            {row.data.map((cell, cellIndex) => (
              <TableCell
                className={cn(
                  `${
                    typeof cell !== "string" ? "p-0 border-0" : "p-4"
                  } text-center border-black ${
                    row.data.length !== cellIndex + 1 && "border-r"
                  }`,
                  row.className
                )}
                key={cellIndex}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdvanceEvaluationTable;
