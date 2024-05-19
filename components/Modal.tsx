"use client";
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type props = {
  sizeX: string;
  sizeY: string;
  content: string;
  children: React.ReactNode;
};
export default function Modal({ sizeX, content, children }: props) {
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full "
              >
                <Dialog.Panel
                  className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-${sizeX} h-[600px] `}
                >
                  <div className="h-full bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-center">
                      <div className="mx-auto flex w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InformationCircleIcon
                          className="h-6 w-6 text-emerald-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex items-center justify-center text-center font-semibold sm:ml-4 sm:text-left">
                        {content}
                      </div>
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
