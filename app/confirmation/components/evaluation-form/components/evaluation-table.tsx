import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Props = {
  header: string[];
  data: (string | React.ReactNode)[][];
  border?: boolean;
  tableCellClasses?: string;
};

const EvaluationTable = ({ header, data, border, tableCellClasses }: Props) => {
  return (
    <Table className={`border border-black ${border && "border-0"}`}>
      <TableHeader>
        <TableRow className={cn("", tableCellClasses)}>
          {header.map((doc, i) => {
            return (
              <TableHead
                className={cn(
                  `text-center border-black border-r text-black border-b font-bold ${
                    header.length === i + 1 && `border-r-0 `
                  } `,
                  tableCellClasses
                )}
                key={i}
              >
                {doc}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow className="border-b border-black" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell
                className={cn(
                  `${
                    typeof cell !== "string" ? "p-0 border-0" : "p-4"
                  } text-center border-black ${
                    row.length !== cellIndex + 1 && "border-r"
                  }`,
                  tableCellClasses
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

export default EvaluationTable;
