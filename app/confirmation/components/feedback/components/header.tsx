type Props = {};

const FeedbackHeader = (props: Props) => {
  return (
    <>
      <div className="grid font-bold col-span-1 border-r border-black border-b p-2"></div>
      <div className="grid font-bold col-span-1 border-r border-black border-b p-2">
        Term-II of Previous Academic Year
      </div>
      <div className="grid font-bold col-span-1 border-r border-black border-b p-2">
        Term-I of Current Academic Year
      </div>
      <div className="grid font-bold col-span-1 border-black border-b p-2">
        Average
      </div>
    </>
  );
};

export default FeedbackHeader;
