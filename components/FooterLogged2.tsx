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
type Props = {};
//for messages &
export default function Footer({}: Props) {
  const [message, setmessage] = useState(false);
  const [trips, settrips] = useState(false);
  const [wishlists, setwishlists] = useState(false);
  const [explore, setexplore] = useState(false);
  const [account, setaccount] = useState(false);

  //@ts_ignore
  const path = usePathname() ?? "";
  useEffect(() => {
    switch (path) {
      case "/account":
        setaccount(true);
        setwishlists(false);
        settrips(false);
        setmessage(false);
        setexplore(false);
        break;
      case "/wishlists":
        setwishlists(true);
        setaccount(false);
        setexplore(false);
        settrips(false);
        setmessage(false);
        break;
      case "/":
        setexplore(true);
        setwishlists(false);
        setaccount(false);
        settrips(false);
        setmessage(false);
        break;
      case "/trips":
        settrips(true);
        setexplore(false);
        setwishlists(false);
        setaccount(false);
        setmessage(false);
        break;
      case "/messages":
        setmessage(true);
        settrips(false);
        setexplore(false);
        setwishlists(false);
        setaccount(false);
        break;
      case "/search":
        setexplore(true);
        setmessage(false);
        settrips(false);
        setwishlists(false);
        setaccount(false);
        break;
      default:
        setexplore(true);
        setmessage(false);
        settrips(false);
        setwishlists(false);
        setaccount(false);
    }
  }, [path]);

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10">
      <div className="w-screen border-[1px] bg-white">
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
            <Link href={"/"} className="flex-1" key={"explore"}>
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
                <p className="select-none truncate text-[11px] font-semibold text-gray-600">
                  Explore
                </p>
              </label>
            </Link>
            <Link href={"/wishlists"} className="flex-1" key={"wishlists"}>
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
                <p className="select-none truncate text-[11px] font-semibold text-gray-600">
                  WishList
                </p>
              </label>
            </Link>
            <Link href={"/trips"} className="flex-1" key={"trips"}>
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
                <p className="select-none truncate text-[11px] font-semibold text-gray-600">
                  Trips
                </p>
              </label>
            </Link>
            <Link href={"/messages"} className="flex-1" key={"messages"}>
              <input
                type="radio"
                id={"radio_ChatBubbleIcon"}
                name="Radio1"
                value={"radio_ChatBubbleIcon"}
                className="peer hidden"
                required
                defaultChecked={message}
              />
              <label
                htmlFor={"radio_ChatBubbleIcon"}
                className="flex cursor-pointer flex-col items-center justify-center text-gray-400 peer-checked:cursor-default peer-checked:text-rose-600"
              >
                <ChatBubbleBottomCenterIcon
                  width={26}
                ></ChatBubbleBottomCenterIcon>
                <p className="select-none truncate text-[11px] font-semibold text-gray-600">
                  Inbox
                </p>
              </label>
            </Link>
            <Link href={"/account"} className="flex-1" key={"account"}>
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
                <p className="select-none truncate text-[11px] font-semibold text-gray-600">
                  Profile
                </p>
              </label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
