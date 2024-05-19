"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

type Props = {};

export default function UserMenuLogged({}: Props) {
  const router = useRouter();
  return (
    <div>
      <Menu as="div" className="relative z-50">
        <div>
          <Menu.Button>
            <div className="duratiobun-300 relative flex h-11 w-[79px] cursor-pointer items-center justify-center gap-1 rounded-full border-[1.5px] transition-shadow hover:shadow-md">
              <Bars3Icon className="h-6 cursor-pointer rounded-full font-bold text-gray-700" />
              <UserCircleIcon className="h-9 cursor-pointer rounded-full bg-gray-300 fill-slate-600 font-bold text-gray-500" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white py-2 shadow-lg shadow-black/30 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="divide-y">
              <div className="mb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/messages"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Messages
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  {({ active, disabled }) => (
                    <button
                      onClick={() => console.log("")}
                      className={` ${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } ${
                        disabled ? "text-gray-400" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                    >
                      Notifications
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/trips"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Trips
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={"/wishlists"}
                      className={`${
                        active ? "cursor-pointer bg-gray-100" : ""
                      } group flex w-full items-center px-4 py-[10px] text-sm`}
                    >
                      Wishlists
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div>
                <div className="my-2">
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Airbnb your home
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Host an experience
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/account"}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Account
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <button
                        onClick={() => console.log("")}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } ${
                          disabled ? "text-gray-400" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Help
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className={` ${
                          active ? "cursor-pointer bg-gray-100" : ""
                        } group flex w-full items-center px-4 py-[10px] text-sm font-normal`}
                      >
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
