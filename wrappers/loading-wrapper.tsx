"use client";
import Loader from "@/components/Loader/loader";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    console.log(
      `🚀 ~ file: loading-wrapper.tsx:25 ~ pathname === ("/login" || "signup":`,
      pathname === ("/login" || "/signup"),
      pathname
    );
    if (pathname === ("/signup" || "/login" || "/waiting")) {
    } else {
      router.push("/login");
    }
  }
  if (status === undefined) {
    return <Loader />;
  }
  return <>{children}</>;
};

export default Auth;
