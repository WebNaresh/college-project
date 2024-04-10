import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
type Props = { title: string };

const AcademicCellTermIIPrevious = ({ title }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/teaching-learning`,
      {
        term: "II",
        year: "Previous",
      },
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: [`form-details-II-Previous`],
    queryFn: fetchFormDetails,
  });

  return (
    <>
      <div className="flex text-center font-bold p-2 border-t border-black">
        {title}
      </div>
      {data?.termIIPreviousData?.map((doc: any, index: number) => (
        <div key={index} className="col-span-1 grid grid-cols-8">
          <div className=" text-center p-2 font-bold text-sm px-4 border-black border border-l-0 border-b-0">
            {index + 1}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.subjectName}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.year}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.level}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.courseHead}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.noOfHrsWeek}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border  border-l-0 border-b-0">
            {doc?.noOfClassesConducted}
          </div>
          <div className="col-span-1 text-center p-2 font-bold text-sm px-4 border-black border border-r-0  border-l-0 border-b-0">
            {doc?.result}
          </div>
        </div>
      ))}
    </>
  );
};

export default AcademicCellTermIIPrevious;
