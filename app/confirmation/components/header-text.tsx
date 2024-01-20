import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

const HeaderText = ({ title, className }: Props) => {
  return <div className={cn("font-bold", className)}>{title}</div>;
};

export default HeaderText;
