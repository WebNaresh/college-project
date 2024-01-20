import { format } from "date-fns";
import { PerformanceEvalutationFormDetails } from "../../form";
import TextField from "./components/text-field";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const PersonalInfo = ({ data }: Props) => {
  return (
    <div className="w-full border-[1px] border-b-0 border-black grid grid-cols-3">
      <TextField
        title="Name of the Department"
        data={data?.professtionalInfo?.departmentName as string}
      />
      <TextField
        title="Name of the Faculty"
        data={data?.professtionalInfo?.facaultyName as string}
      />
      <TextField
        title="Current Designation"
        data={data?.professtionalInfo?.designation as string}
      />
      <TextField
        title="Date of Joining "
        data={
          data?.professtionalInfo?.dateOfJoining !== undefined
            ? (format(data?.professtionalInfo?.dateOfJoining, "PPP") as string)
            : ""
        }
      />
      <TextField
        title="Contact No."
        data={data?.professtionalInfo?.departmentName as string}
      />
      <TextField
        title="Email-id "
        data={data?.professtionalInfo?.departmentName as string}
      />
      <TextField
        title="Whether acquired any degree / certification during the period If yes give details "
        data="Tow"
      />
    </div>
  );
};

export default PersonalInfo;
