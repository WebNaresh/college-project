"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MiniForm from "./components/mini-form";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .get(`${process.env.NEXT_PUBLIC_ROUTE}/api/form`, config)
      .catch((errors) => {
        console.log(errors);
      })
      .then((response) => {
        console.log(response);
      });
  };
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchFormDetails });
  return (
    <div>
      <MiniForm />
    </div>
  );
};

export default Step1;
