"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

type Props = {};
export default function Account({}: Props) {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      Account : {session?.user?.name}
      <div
        onClick={() => signOut()}
        className="mobile:hidden border-[1px] w-36 hover:bg-gray-100 items-center justify-center cursor-pointer select-none border-black h-14 transition-all duration-200 flex rounded-3xl p-3 mt-5"
      >
        Logout
      </div>
    </div>
  );
}
