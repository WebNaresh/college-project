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
  header?: RowItemInteferance;
  internalData?: RowItemInteferance[];
  className?: string;
  title?: {
    className?: string;
    titleData: string;
  };
};

const AdvanceEvaluationTable = ({
  header,
  internalData,
  className,
  title,
}: Props) => {
  return (
    <>
      {title && (
        <div
          className={cn(
            title.className,
            "border-b border-black p-2 text-left font-bold"
          )}
        >
          {title.titleData}
        </div>
      )}
      <Table className={cn(`border border-black`, className)}>
        {header && (
          <TableHeader>
            <TableRow className="w-full">
              {header?.data?.map((doc, i) => (
                <TableHead
                  className={cn(
                    `text-center border-black border-r text-black border-b font-bold ${
                      header?.data?.length === i + 1 && "border-r-0"
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
        )}
        <TableBody>
          {internalData &&
            internalData.map((row, rowIndex) => (
              <TableRow
                className={cn(row.className, "border-b border-black")}
                key={rowIndex}
              >
                {row?.data?.map((cell, cellIndex) => (
                  <TableCell
                    className={cn(
                      `${
                        typeof cell !== "string" ? "p-0 border-0" : "p-4"
                      } text-center border-black ${
                        row?.data?.length !== cellIndex + 1 && "border-r"
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
    </>
  );
};

export default AdvanceEvaluationTable;
