type Props = {
  header: string;
  firstValue: number | undefined;
  secondValue: number | undefined;
};

const FeedbackRow = ({ header, firstValue, secondValue }: Props) => {
  return (
    <>
      <div className="grid font-bold col-span-1 border-r border-black p-2 border-b">
        {header}
      </div>
      <div className="grid col-span-1 border-r border-black p-2 border-b">
        {firstValue ? firstValue : 0}
      </div>
      <div className="grid col-span-1 border-r border-black p-2 border-b">
        {secondValue ? secondValue : 0}
      </div>
      <div className="grid col-span-1 border-black p-2 border-b">
        {firstValue && secondValue ? (firstValue + secondValue) / 2 : 0}
      </div>
    </>
  );
};

export default FeedbackRow;
