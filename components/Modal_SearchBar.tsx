"use client";
import {
  Fragment,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { HiUsers } from "react-icons/hi";
import BuyComponent from "./BuyComponent";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type props = {
  sizeX: string;
  sizeY: string;
  content?: string;
  placeholder?: string;
  // children: React.ReactNode;
};
export default function Modal_Header({ sizeY, sizeX, placeholder }: props) {
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(-200);
  const [searchText, setSearchText] = useState<string>("");
  const cancelButtonRef = useRef(null);
  useEffect(() => {
    if (!open) {
      setX(-200);
      setSearchText("");
    } else {
      setX(0);
    }
  }, [open]);

  // Date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState<number>(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };

  const HandleSelection = (ranges: any) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };
  const router = useRouter();
  // url +

  const HandleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(
      "/search?" +
        new URLSearchParams({
          location: searchText,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          guests: guests + "",
        })
    );
    setOpen(false);
  };
  return (
    <div className="hidden mobile:flex">
      <div
        onClick={() => {
          if (!open) setOpen(true);
        }}
      >
        {/* search bar */}
        {/* <div className="relative flex h-12 w-[350px] flex-row items-center justify-center overflow-hidden rounded-full border-[1.5px] text-[15px] shadow-md transition-all duration-300 hover:shadow-lg hover:drop-shadow-sm"> */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 0 : 1,
            visibility: open ? "hidden" : "visible",
          }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
          }}
          className={
            "relative flex h-12 w-[350px] flex-row items-center justify-center overflow-hidden rounded-full border-[1.5px] text-[15px] shadow-md transition-all duration-300 hover:shadow-lg hover:drop-shadow-sm"
          }
        >
          <div className="flex h-12 w-[350px] flex-row items-center justify-start">
            {placeholder ? (
              <div className="mx-auto cursor-pointer select-none truncate text-[15px] font-medium text-gray-400">
                {placeholder}
              </div>
            ) : (
              <>
                <div className="flex cursor-pointer truncate border-r-[1.2px] px-4 pl-5">
                  Anywhere
                </div>
                <div className="flex cursor-pointer truncate border-r-[1.2px] px-4">
                  Any week
                </div>
                <div className="flex cursor-pointer flex-row items-center justify-center gap-2 pl-4 font-normal text-gray-400 ">
                  <span className="truncate">Add guests</span>
                  <MagnifyingGlassCircleIcon className="mr-2 h-9 cursor-pointer rounded-full font-bold text-[#ff385c]" />
                </div>
              </>
            )}
          </div>
        </motion.div>
        {/* </div> */}
      </div>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 mx-auto bg-emerald-700"
            onClose={() => setOpen(false)}
            initialFocus={cancelButtonRef}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed left-0 bottom-0 right-0 top-20 bg-black bg-opacity-25 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-100"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-100"
            >
              <Dialog.Panel
                className={`fixed top-0 left-0 right-0 mx-auto flex h-20 flex-col items-center justify-center transition-all duration-200`}
              >
                <motion.div
                  initial={false}
                  animate={{
                    // x: x,
                    opacity: !open ? 0 : 1,
                    scale: !open ? 1 : 1,
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0.1,
                  }}
                  // -top-16
                  className="fixed flex h-12 w-[350px] items-center justify-start overflow-hidden rounded-full border-[1.5px] bg-white text-[15px] shadow-md transition-all duration-300 hover:shadow-lg hover:drop-shadow-sm"
                >
                  <input
                    value={searchText}
                    type={"text"}
                    className="z-40 ml-6 h-full w-full border-0 bg-transparent font-medium outline-none"
                    placeholder={"Start your search"}
                    onChange={(e) => setSearchText(e.currentTarget.value)}
                  />
                  <div className="flex flex-row items-center justify-end font-normal text-gray-400 ">
                    <MagnifyingGlassCircleIcon className="mr-2 h-9 cursor-pointer rounded-full font-bold text-[#ff385c] transition-all duration-100 hover:scale-105" />
                  </div>
                </motion.div>
                <div className="relative top-20 h-full w-full overflow-y-visible bg-red-300">
                  <motion.div
                    initial={false}
                    animate={
                      {
                        // y: x,
                      }
                    }
                    transition={{
                      duration: 1,
                      type: "spring",
                      bounce: 0.1,
                    }}
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-y-visible bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                  >
                    <div className="absolute left-0 top-0 z-40 h-20 w-full scale-100 bg-white shadow-xl"></div>

                    <div className="relative left-0 right-0 top-48 z-40 inline-block select-none items-center justify-center bg-white shadow-md">
                      <DateRangePicker
                        ranges={[selectionRange]}
                        color={"#fc696e"}
                        className={`border-[1px] bg-white text-base `}
                        rangeColors={["#fc696e", "#fc696e", "#fc696e"]}
                        onChange={HandleSelection}
                      />
                      <div className="flex flex-row items-center justify-between border-b-[1px] bg-white px-5 py-2">
                        <div className="text-[14px] font-medium">
                          Number of guests
                        </div>
                        <div className="flex items-end">
                          <HiUsers className="h-6 w-6 text-gray-800" />
                          <BuyComponent setGuests={setGuests} />
                        </div>
                      </div>
                      <div
                        ref={cancelButtonRef}
                        className="flex flex-row items-center justify-center px-5 py-2"
                      >
                        <div className="flex flex-1 justify-center">
                          <button
                            onClick={() => {
                              setOpen(!open);
                            }}
                            className="rounded-md py-2 px-3 transition-all duration-200 hover:font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="flex flex-1 justify-center">
                          <button
                            onClick={HandleSearch}
                            className="rounded-md py-2 px-3 text-red-400 transition-all duration-200 hover:font-medium hover:text-red-500"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
