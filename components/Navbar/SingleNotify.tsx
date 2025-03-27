"use client";

import { User } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { CheckCircle2, XCircle } from "lucide-react";
import { FC } from "react";
import toast from "react-hot-toast";

type userProps = {
  user: User;
};

const SingleNotify: FC<userProps> = ({ user }) => {
  let queryClient = useQueryClient();
  const AcceptUser = async (id: string) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result: AxiosResponse = await axios.patch(
        `${process.env.NEXT_PUBLIC_ROUTE}/api/users`,
        id,
        config
      );
      await queryClient.invalidateQueries({
        queryKey: ["userList"],
      });
      toast.success("user accepted successfully");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const RejectUser = async (id: string) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const request = await axios.delete(
        `${process.env.NEXT_PUBLIC_ROUTE}/api/users/${id}`,
        config
      );

      console.log(request, "Thsi is");

      await queryClient.invalidateQueries({
        queryKey: ["userList"],
      });

      toast.success("user requets has been rejected");
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white flex items-center shadow-md rounded-md gap-4  py-1  px-5">
        <h1 className="text-sm ">
          <span className="font-semibold text-primary">{user?.name}</span> has
          register on website
        </h1>
        <div className="flex my-2 gap-3 items-center">
          <button className=" text-red-500 hover:scale-[1.2] transition-all  !text-xs rounded-md !py-1 ">
            <XCircle onClick={() => RejectUser(user?.id)} />
          </button>
          <button className="hover:scale-[1.2] transition-all text-green-500  !text-xs rounded-md !py-1 ">
            <CheckCircle2 onClick={() => AcceptUser(user?.id)} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleNotify;
