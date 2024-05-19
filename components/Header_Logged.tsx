import React from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import UserMenuLogged from "./UserMenuLogged";
import Link from "next/link";
import Modal_SearchBar from "./Modal_SearchBar";
import Modal from "./Modal";
import Modal_MobileSearchBar from "./Modal_MobileSearchBar";

type Props = {
  width?: string;
  placeholder?: string;
};

export default function Header({ width = "[2500px]", placeholder }: Props) {
  return (
    // <header id="header" className="fixed top-0 z-20">
    <div className="w-screen bg-white mobile:border-[1px]">
      {/* Desktop and tablets */}
      <div
        className={`collapse grid h-0 grid-cols-[30px_40px_minmax(360px,_1fr)_285px_30px] gap-0 self-center mobile:visible mobile:h-20 md:grid-cols-[30px_2fr_350px_minmax(285px,_2fr)_30px] lg:grid-cols-[70px_2fr_350px_minmax(285px,_2fr)_70px] max-w-${width} mx-auto`}
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
            className="collapse absolute w-8 cursor-pointer mobile:visible md:collapse"
            src={"/images/airbnb_small.png"}
            alt={""}
            width={100}
            height={50}
          />
        </Link>
        <div className="relative col-start-3 flex items-center justify-center  font-semibold md:mx-0">
          {/* <Modal_Header sizeX={"full"} sizeY={"[100px]"}>
          </Modal_Header> */}
          <Modal_SearchBar
            sizeX={"full"}
            sizeY={"[100px]"}
            placeholder={placeholder}
          ></Modal_SearchBar>
        </div>
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
      <div className="flex h-20 w-full cursor-pointer flex-row items-center justify-center font-semibold mobile:collapse mobile:h-0">
        <Modal_MobileSearchBar sizeX={"full"} sizeY={"full"}>
          <div className="flex h-14 w-full cursor-pointer flex-row items-center justify-between rounded-full border-[1px] shadow-md hover:shadow-lg">
            <div className="flex flex-row">
              <div className="flex h-14 w-14 items-center justify-center">
                <BiSearch className="h-[18px] w-[18px]" />
              </div>
              <div className="flex flex-none flex-col justify-center">
                <div className="text-base font-medium">Where to?</div>
                <div className="truncate text-xs font-semibold text-gray-500">
                  Anywhere <span className="font-black">&middot;</span> Any week{" "}
                  <span className="font-black">&middot;</span> Add guests
                </div>
              </div>
            </div>
            <div className="h-14 w-14 p-2">
              <div className="flex h-full w-full items-center justify-center rounded-full border-[1px]">
                <TbAdjustmentsHorizontal />
              </div>
            </div>
          </div>
        </Modal_MobileSearchBar>
      </div>
    </div>
    // </header>
  );
}
