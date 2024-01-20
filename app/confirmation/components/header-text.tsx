type Props = {
  title: string;
};

const HeaderText = ({ title }: Props) => {
  return <div className="font-bold">{title}</div>;
};

export default HeaderText;
