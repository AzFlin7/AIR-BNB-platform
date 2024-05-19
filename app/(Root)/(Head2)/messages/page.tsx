"use client";
import { Tab } from "@headlessui/react";
import {
  XMarkIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import React, { MouseEventHandler, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="h-screen w-screen ">
      {/* desktop-tablet */}
      <div className="hidden h-full w-full flex-row mobile:flex">
        <div className="border-r-1 flex h-full w-[690px] flex-col border-[1px] border-t-0">
          <div className="flex h-20 items-center justify-between border-b-[1px] px-6 text-start">
            <p className="text-lg font-bold">Messages</p>
            <ChatBubbleBottomCenterTextIcon className="h-9 w-9 cursor-pointer rounded-full p-[5px] transition-all duration-100 hover:bg-gray-100" />
          </div>
          <div className="flex flex-col items-center gap-y-2 p-5 text-center text-lg font-bold">
            <div>You have no unread messages</div>
            <div className="text-base font-normal leading-5 text-gray-500">
              When you book a trip or experience, messages from your host will
              show up here.
            </div>
            <div className="mt-5 flex h-14 cursor-pointer select-none items-center justify-center rounded-3xl border-[1px] border-black p-3 transition-all duration-200 hover:bg-gray-100">
              Explore Airbnb
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col">
          <div className="h-20 border-b-[1px]"></div>
        </div>
        <div className="hidden h-full w-[690px] flex-col border-[1px] border-t-0 lg:flex">
          <div className="flex h-20 items-center justify-between border-b-[1px] px-6 text-start">
            <p className="text-lg font-bold">Details</p>
            <XMarkIcon className="h-9 w-9 cursor-pointer rounded-full p-[5px] transition-all duration-100 hover:bg-gray-100 " />
          </div>
        </div>
      </div>

      {/* mobile and small devices */}
      <div className="mx-auto flex h-full w-full flex-col px-3 mobile:hidden">
        <div className="mx-3 flex h-32 items-center justify-between pt-6 text-4xl font-semibold">
          <div>Inbox</div>
          <ChatBubbleBottomCenterTextIcon className="h-9 w-9 cursor-pointer rounded-full p-[5px] transition-all duration-100 hover:bg-gray-100" />
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-start space-x-1 rounded-xl border-b-[1px]">
            <Tab key={"Messages"} className="outline-none">
              {({ selected }) => (
                <div className="outline-none">
                  <div
                    className={`flex rounded-lg py-3.5 px-3 text-sm font-semibold leading-5 text-gray-400 outline-none transition-all duration-100 ${
                      selected
                        ? "text-gray-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    Messages
                  </div>
                  <div
                    className={`mx-3 flex h-[2px] rounded-full transition-all duration-500 ${
                      selected ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                </div>
              )}
            </Tab>
            <Tab key={"Notifications"} className="outline-none">
              {({ selected }) => (
                <div>
                  <div
                    className={`flex rounded-lg py-3.5 px-3 text-sm font-semibold leading-5 text-gray-400 outline-none transition-all duration-100  ${
                      selected
                        ? "text-gray-800"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    Notifications
                  </div>
                  <div
                    className={`mx-3 flex h-[2px] rounded-full transition-all duration-500 ${
                      selected ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              key={"MessagesPanel"}
              className={
                "rounded-xl bg-white p-3 outline-none ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400"
              }
            >
              <div className="flex flex-col items-center gap-y-2 p-5 text-center text-lg font-bold">
                <div>You have no unread messages</div>
                <div className="text-base font-normal leading-5 text-gray-500">
                  When you book a trip or experience, messages from your host
                  will show up here.
                </div>
                <div className="mt-5 flex h-14 cursor-pointer select-none items-center justify-center rounded-3xl border-[1px] border-black p-3 transition-all duration-200 hover:bg-gray-100">
                  Explore Airbnb
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel
              key={"NotificationPanel"}
              className={
                "rounded-xl bg-white p-3 outline-none ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400"
              }
            >
              <div className="text-sm font-medium leading-5 text-gray-700">
                You're all caught up
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
