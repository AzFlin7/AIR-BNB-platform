"use client";
import React, { useEffect, useState } from "react";
import {
  MapIcon,
  GlobeAltIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import MyModal from "./Modal";
import { FaAirbnb } from "react-icons/fa";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Modal_map from "./Modal_map";
type room = {
  id: number;
  property_name: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  veds: number;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: number;
  distance: number;
};
type Props = {
  data?: room[];
};

export default function Footer({ data }: Props) {
  const [account, setaccount] = useState(false);
  const [wishlists, setwishlists] = useState(false);
  const [explore, setexplore] = useState(false);
  const [trips, settrips] = useState(false);
  const [inbox, setinbox] = useState(false);

  //@ts_ignore
  const path = usePathname() ?? "";
  useEffect(() => {
    switch (path) {
      case "/account":
        setaccount(true);
        setwishlists(false);
        setexplore(false);
        settrips(false);
        setinbox(false);
        break;
      case "/wishlists":
        setwishlists(true);
        setaccount(false);
        setexplore(false);
        settrips(false);
        setinbox(false);
        break;
      case "/":
        setexplore(true);
        setwishlists(false);
        setaccount(false);
        settrips(false);
        setinbox(false);
        break;
      case "/trips":
        settrips(true);
        setexplore(false);
        setwishlists(false);
        setaccount(false);
        setinbox(false);
        break;
      case "/messages":
        setinbox(true);
        settrips(false);
        setexplore(false);
        setwishlists(false);
        setaccount(false);
        break;
      case "/search":
        setexplore(true);
        setinbox(false);
        settrips(false);
        setwishlists(false);
        setaccount(false);
        break;
      default:
        setexplore(true);
        setinbox(false);
        settrips(false);
        setwishlists(false);
        setaccount(false);
    }
  }, [path]);
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 mobile:gap-10">
      {/* show map */}
      <Modal_map data={data} sizeY={"[1000px]"}>
        <div className=" flex h-8 w-auto cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-zinc-800 px-3 text-xs font-medium text-white transition-all hover:scale-105 hover:shadow-md mobile:h-12 mobile:text-base">
          Show map
          <MapIcon className="h-4 w-4 mobile:h-5 mobile:w-5" />
        </div>
      </Modal_map>
      <footer className="w-screen border-[1px] bg-white">
        {/* desktop and tables */}
        <div className="mx-auto max-w-[2500px]">
          <div className="mx-16 hidden h-12 flex-row items-center justify-between text-[14px] mobile:flex lg:mx-24">
            <div className="mr-5 flex flex-wrap">
              <Link href={"#"}>© 2022 Airbnb, Inc.</Link>
              <span className="mx-1"> · </span>
              <Link href={"#"} className="hover:underline">
                Privacy
              </Link>
              <p>&nbsp; · &nbsp;</p>
              <Link href={"#"} className="hover:underline">
                Terms
              </Link>
              <p>&nbsp; · &nbsp;</p>
              <Link href={"#"} className="hover:underline">
                Sitemap
              </Link>
              <p>&nbsp; · &nbsp;</p>
              <Link href={"#"} className="hover:underline">
                Destinations
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              {/* language */}
              <MyModal sizeX={"full"} sizeY={"[1000px]"} content={"Languages"}>
                <div className="flex cursor-pointer flex-row gap-2 font-medium hover:underline">
                  <GlobeAltIcon className="h-5" />
                  <div className="font-medium hover:underline">English(US)</div>
                </div>
              </MyModal>

              {/* Currency */}
              <MyModal sizeX={"full"} sizeY={"[1000px]"} content={"Currency"}>
                <div className="flex cursor-pointer flex-row gap-2 truncate font-medium hover:underline">
                  <div className="font-medium hover:underline">$ USD</div>
                </div>
              </MyModal>

              {/* support &Rs */}
              {/* <div className="flex flex-row gap-2 hover:underline cursor-pointer font-medium truncate">
                <Link href={"#"}>Support & ressources</Link>
                <ChevronUpIcon className="h-4 stroke-[2px] font-bold" />
              </div> */}

              <MyModal
                sizeX={"full"}
                sizeY={"[800px]"}
                content={"Support and ressources"}
              >
                <div className="flex cursor-pointer flex-row gap-2 truncate font-medium hover:underline">
                  <p className="hover:underline">Support & ressources</p>
                  <ChevronUpIcon className="h-4 stroke-[2px] font-bold " />
                </div>
              </MyModal>
            </div>
          </div>

          {/* Phones and small devices */}
          <div className="flex h-14 flex-row items-center justify-between text-[14px] transition-all duration-200 xs:mx-10 sm:gap-x-8 mobile:hidden">
            <Link href={"/"} className="flex-1">
              <input
                type="radio"
                id={"radio_MagnifyingGlassIcon"}
                name="Radio1"
                value={"radio_MagnifyingGlassIcon"}
                className="peer hidden"
                required
                defaultChecked={explore}
              />
              <label
                htmlFor={"radio_MagnifyingGlassIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <MagnifyingGlassIcon
                  className="text-[2.5px] "
                  width={26}
                ></MagnifyingGlassIcon>
                <p className="select-none truncate text-[11px] font-medium text-gray-600">
                  Explore
                </p>
              </label>
            </Link>
            <Link href={"/wishlists"} className="flex-1">
              <input
                type="radio"
                id={"radio_HeartIcon"}
                name="Radio1"
                value={"radio_HeartIcon"}
                className="peer hidden"
                required
                defaultChecked={wishlists}
              />
              <label
                htmlFor={"radio_HeartIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <HeartIcon width={26}></HeartIcon>
                <p className="select-none truncate text-[11px] font-medium text-gray-600">
                  WishList
                </p>
              </label>
            </Link>
            <Link href={"/trips"} className="flex-1">
              <input
                type="radio"
                id={"radio_AirbnbIcon"}
                name="Radio1"
                value={"radio_AirbnbIcon"}
                className="peer hidden"
                required
                defaultChecked={trips}
              />
              <label
                htmlFor={"radio_AirbnbIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <FaAirbnb className="h-[26px] w-[26px]"></FaAirbnb>
                <p className="select-none truncate text-[11px] font-medium text-gray-600">
                  Trips
                </p>
              </label>
            </Link>
            <Link href={"/messages"} className="flex-1">
              <input
                type="radio"
                id={"radio_ChatBubbleIcon"}
                name="Radio1"
                value={"radio_ChatBubbleIcon"}
                className="peer hidden"
                required
                defaultChecked={inbox}
              />
              <label
                htmlFor={"radio_ChatBubbleIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <ChatBubbleBottomCenterIcon
                  width={26}
                ></ChatBubbleBottomCenterIcon>
                <p className="select-none truncate text-[11px] font-medium text-gray-600">
                  Inbox
                </p>
              </label>
            </Link>
            <Link href={"/account"} className="flex-1">
              <input
                type="radio"
                id={"radio_UserCircleIcon"}
                name="Radio1"
                value={"radio_UserCircleIcon"}
                className="group peer hidden"
                required
                defaultChecked={account}
              />
              <label
                htmlFor={"radio_UserCircleIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <UserCircleIcon width={26}></UserCircleIcon>
                <p className="select-none truncate text-[11px] font-medium text-gray-600">
                  Profile
                </p>
              </label>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
