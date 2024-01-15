import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  setTimeout(() => {
    console.log("hello");
  }, 10000);
  return (
    <Accordion type="single" collapsible className="w-full h-[150vh]">
      <Button>Button</Button>
    </Accordion>
  );
}
