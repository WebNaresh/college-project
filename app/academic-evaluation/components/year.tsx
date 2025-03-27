type Props = {};

const CurrentYear = (props: Props) => {
  return (
    <>
      {new Date().getFullYear() - 1} - {new Date().getFullYear()}
    </>
  );
};

export default CurrentYear;
