import React from "react";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import UserMenuLogged from "./UserMenuLogged";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  // const nextCookies = cookies();
  // const token = nextCookies.get("accessToken");

  return (
    <div className="w-screen border-[1px] bg-white">
      {/* Desktop and tablets */}
      <div
        className={`collapse mx-auto grid h-0 max-w-[1300px] grid-cols-[30px_40px_minmax(360px,_1fr)_285px_30px] gap-0 self-center mobile:visible mobile:h-20 md:grid-cols-[30px_2fr_350px_minmax(285px,_2fr)_30px] lg:grid-cols-[70px_2fr_350px_minmax(285px,_2fr)_70px]`}
      >
        <Link
          href={"/"}
          className="relative col-start-2 mr-2 flex w-32 select-none items-center justify-start md:mt-1 md:p-2"
        >
          <Image
            className="collapse cursor-pointer md:visible"
            src={"/images/airbnb2.png"}
            alt={""}
            width={100}
            height={50}
          />
          <Image
            className="collapse absolute w-9 cursor-pointer mobile:visible md:collapse"
            src={"/images/airbnb_small.png"}
            alt={""}
            width={100}
            height={50}
          />
        </Link>
        <div className="relative col-start-4 mx-3 flex flex-row items-center justify-end gap-4 font-semibold ">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className=" flex h-11 cursor-pointer items-center truncate rounded-full px-2 text-[14px] font-semibold transition-colors duration-200 hover:bg-gray-100">
              Become a Host
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100">
              <GlobeAltIcon className="h-5 cursor-pointer rounded-full font-bold" />
            </div>
          </div>
          <div>
            <UserMenuLogged />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
    </div>
  );
}
