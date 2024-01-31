"use client";
import Loader from "@/components/Loader/loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }
  if (status === undefined) {
    return <Loader />;
  }
  return <>{children}</>;
};

export default Auth;
