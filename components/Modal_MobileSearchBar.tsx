"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  InformationCircleIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type props = {
  sizeX: string;
  sizeY: string;
  children: React.ReactNode;
};
export default function Modal({ sizeX, sizeY, children }: props) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState<string>("");

  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const HandleSearch = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(
      "/search?" +
        new URLSearchParams({
          location: searchText,
          startDate: "",
          endDate: "",
          guests: "1",
        })
    );
    setOpen(false);
  };
  return (
    <div className="mx-6 mt-4 w-full">
      <div
        onClick={() => {
          console.log("e");
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
            <div className="flex h-screen items-start justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-[180px]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-[180px]"
                leaveTo="opacity-0 translate-y-full "
              >
                {/* <Dialog.Panel
                  className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-${sizeX} h-full `}
                >
                  <div className="h-full bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-center">
                      <div className="mx-auto flex w-12 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                        <MagnifyingGlassCircleIcon
                          className="h-6 w-6 text-emerald-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex w-full items-center justify-center rounded-xl bg-gray-100 text-center font-semibold sm:ml-4 sm:text-left">
                        <input
                          value={searchText}
                          type={"text"}
                          className="z-40 ml-6 h-12 w-full border-0 bg-transparent font-medium outline-none"
                          placeholder={"Search location"}
                          onChange={(e) => setSearchText(e.currentTarget.value)}
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel> */}
                <Dialog.Panel
                  className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-${sizeX} h-5/6 `}
                >
                  <div className="h-full bg-white p-6 px-4 pt-5 pb-4">
                    <div className="flex items-center gap-x-2">
                      <div className="mx-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <MagnifyingGlassIcon
                          className="h-6 w-6 text-rose-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex w-full items-center justify-start rounded-xl bg-gray-100 px-2 text-center font-semibold">
                        <input
                          value={searchText}
                          type={"text"}
                          className="h-10 border-0 bg-transparent font-medium outline-none"
                          placeholder={"Search location"}
                          onChange={(e) => setSearchText(e.currentTarget.value)}
                        />
                      </div>
                      <div
                        onClick={HandleSearch}
                        className="cursor-pointer rounded-xl bg-rose-500 px-4 py-2 text-stone-100 transition-all duration-200 active:scale-95"
                      >
                        Search
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
