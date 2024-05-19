"use client";
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import LocationMap from "./LocationMap";
import { XMarkIcon } from "@heroicons/react/24/solid";
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
type props = {
  children: React.ReactNode;
  sizeY: string;
  data?: room[];
};
export default function Modal({ children, data, sizeY }: props) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 "
            enterTo="opacity-100 "
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full items-end justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-[900px]"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[900px] "
              >
                <Dialog.Panel
                  className={`relative h-[800px] w-full transform overflow-hidden rounded-lg text-left shadow-xl transition-all `}
                >
                  <div
                    className="absolute top-0 right-0 z-10 cursor-pointer p-2"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6"></XMarkIcon>
                  </div>
                  <div className="h-full items-center justify-center bg-white p-7">
                    <div className="flex h-[100%] w-full items-center justify-center overflow-hidden rounded-xl">
                      <LocationMap data={data} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
