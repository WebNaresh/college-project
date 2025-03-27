"use client";
import { Button } from "@/components/ui/button";
// Importing useEffect from react
import { useEffect } from "react";

type Props = {};

const DownloadButton = (props: Props) => {
  useEffect(() => {
    // Load html2pdf dynamically
    import("html2pdf.js").then((html2pdf) => {
      (window as any).html2pdf = html2pdf.default;
    });
  }, []);

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
    await (window as any).html2pdf(element, options);
  };

  return (
    <Button className="mx-8" onClick={convertToPdf}>
      Print & Submit
    </Button>
  );
};

export default DownloadButton;
