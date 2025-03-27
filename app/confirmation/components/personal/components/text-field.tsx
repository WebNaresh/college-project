type Props = {
  title: string;
  data: string;
};

const TextField = ({ title, data }: Props) => {
  return (
    <>
      <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-b-[1px]  border-r-[1px] border-black">
        {title}
      </div>
      <div className="col-span-2 text-center p-2  border-b-[1px] border-black justify-center items-center flex">
        {data}
      </div>
    </>
  );
};

export default TextField;
