import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="border border-primary m-4 rounded-lg grid grid-cols-2 p-8">
      <div className="grid col-span-1 border-r border-primary relative justify-center items-center gap-4 ">
        <div className="border-primary rounded-full p-20 h-[300px] w-[300px] grid items-center justify-center relative border-4">
          <div className="absolute transform  translate-x-1/2 ">
            <Image
              alt="logo of modern college"
              src={"/biglogo.svg"}
              height={150}
              width={150}
            />
          </div>
        </div>
        <Button variant={"link"}>
          <Link href={"/login"}>Login with Credentials</Link>
        </Button>
      </div>
      <div className="col-span-1 px-4 gap-4 grid">
        <h4>
          Welcome to{" "}
          <Link href={"/"} className="text-primary font-bold underline">
            Modern college MCA
          </Link>
        </h4>
        <div className="flex items-center justify-center ">
          <Image src={"/email.svg"} height={250} width={250} alt="Email" />
        </div>
        <Button>Waiting for Approval</Button>
      </div>
    </div>
  );
};

export default Page;
