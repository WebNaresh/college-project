"use client";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import UserForm from "./form";

const page = () => {
  const convertToPdf = async () => {
    // Get the HTML element that you want to convert to PDF
    const element = document.getElementById("printable");

    // Set options for the PDF conversion (optional)
    const options = {
      margin: 2,
      filename: "converted-document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    // Perform the HTML to PDF conversion
    await html2pdf(element, options);
  };
  return (
    <div className="my-12 flex flex-col gap-8">
      <UserForm />
      <Button className="mx-8" onClick={convertToPdf}>
        Print & Submit
      </Button>
    </div>
  );
};

export default page;
