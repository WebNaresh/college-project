type Props = {
  averageStudentFeedback: number;
  averagePeerFeedback: number;
};

const FeedbackBottom = ({
  averagePeerFeedback,
  averageStudentFeedback,
}: Props) => {
  return (
    <>
      <div className="grid font-bold col-span-3 border-r border-black p-2">
        Average of Both
      </div>
      <div className="grid font-bold col-span-1 border-black p-2">
        {(averagePeerFeedback + averageStudentFeedback) / 2}
      </div>
    </>
  );
};

export default FeedbackBottom;
