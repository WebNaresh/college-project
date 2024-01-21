type Props = {
  firstColumn: string;
  secondColumn: string | React.ReactNode;
  thirdColumn: string;
  fourthColumn: string;
  isHeader?: boolean;
};

const EvaluationRow = ({
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  isHeader,
}: Props) => {
  return (
    <>
      <div className={`col-span-1 p-2  ${isHeader && "font-bold"}`}>
        {firstColumn}
      </div>
      <div className={`col-span-5 ${isHeader && "font-bold"}`}>
        {secondColumn}
      </div>
      <div
        className={`col-span-1 p-2  text-center text-xs font-bold ${
          isHeader && "font-bold"
        }`}
      >
        {thirdColumn}
      </div>
      <div
        className={`col-span-1 p-2  text-center text-xs ${
          isHeader && "font-bold"
        }`}
      >
        {fourthColumn}
      </div>
    </>
  );
};

export default EvaluationRow;
