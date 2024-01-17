import MiniForm from "./components/mini-form";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step4 = (props: Props) => {
  return (
    <div>
      <MiniForm />
    </div>
  );
};

export default Step4;
