import {
  responsibilityDepartment,
  responsibilityInsitute,
} from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { departmentColumns } from "./components/department-responsibility";
import { instituteColumns } from "./components/institute-responsibility";

type Props = {
  departmentResponsibility: responsibilityDepartment[];
  instituteResponsibility: responsibilityInsitute[];
};

const ResponsibilityForm = ({
  departmentResponsibility,
  instituteResponsibility,
}: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="10. Major Responsibilities Handled" />
      <DataTable
        columns={instituteColumns}
        data={instituteResponsibility}
        title="Major Responsibilities Handled (Institute)"
      />
      <DataTable
        columns={departmentColumns}
        data={departmentResponsibility}
        title="Major Responsibilities Handled (Department)"
      />
    </div>
  );
};

export default ResponsibilityForm;
