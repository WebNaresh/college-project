import MiniForm from "./components/mini-form";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  return (
    <div>
      <MiniForm />
    </div>
  );
};

export default Step1;
