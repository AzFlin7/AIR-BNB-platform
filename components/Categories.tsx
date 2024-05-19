/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { GiFarmTractor, GiGrandPiano, GiHabitatDome } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { FaSwimmingPool } from "react-icons/fa";
import { TbBeach, TbWindmill } from "react-icons/tb";
import { GiPisaTower } from "react-icons/gi";
import { RiCactusLine } from "react-icons/ri";
import { IoSnowOutline } from "react-icons/io5";
import { TbBuildingCastle } from "react-icons/tb";
import {
  MdHouseboat,
  MdOutlineSnowmobile,
  MdOutlineSportsGolf,
  MdOutlineSurfing,
} from "react-icons/md";
import {
  GiIsland,
  GiMountainCave,
  GiPalmTree,
  GiTreehouse,
} from "react-icons/gi";
import Image from "next/image";
import CategoryIcons from "./CategoryIcons";

type Props = {};

export default function Categories() {
  const IconSlider = useRef(null!);
  const Container = useRef(null!);
  const left = useRef(null!);
  const right = useRef(null!);
  const [goLeft, setGoLeft] = useState<boolean>(false);
  const [offset, setoffset] = useState(300);
  const [Scrolled, setScrolled] = useState(0);

  const [dettach, setDettach] = useState(false);

  const slideVariants = {
    GoLeft: {
      x: Scrolled,
    },
    GoRight: {
      x: Scrolled,
    },
  };
  const listenToScroll = () => {
    let heightToHideFrom = 16;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // to limit setting state only the first time
      setDettach(true);
    } else {
      setDettach(false);
    }
  };
  const [hideRight, setHideRight] = useState(true);
  //on mount && on unmount(cleanup)
  useEffect(() => {
    setHideRight(
      IconSlider.current["offsetWidth"] - Container.current["offsetWidth"] <= 0
        ? true
        : false
    );
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      className={
        dettach
          ? "fixed left-0 top-[80px] z-10 mx-auto w-screen bg-white transition-all duration-100"
          : "fixed left-0 top-[80px] z-10 mx-auto w-screen bg-white transition-all duration-100 mobile:pt-4"
      }
    >
      <div
        className={
          dettach
            ? "mx-auto hidden max-w-[2500px] grid-cols-[40px,4fr,40px,100px] items-center justify-center gap-2 px-9 shadow-md shadow-black/5 sm:grid lg:px-20"
            : "mx-auto hidden max-w-[2500px] grid-cols-[40px,4fr,40px,100px] items-center justify-center gap-2 px-9 sm:grid lg:px-20 "
        }
      >
        {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
      </style> */}
        <button
          ref={left}
          hidden={true}
          key="GoLeft"
          className="col-start-1 h-7 w-7 cursor-pointer rounded-full border-b-[1.5px] border-gray-300 shadow-sm transition-all duration-150 ease-in-out hover:scale-[113%] hover:shadow-xl mobile:border-[1.5px]"
          onClick={(e) => {
            let off = offset;
            if (Math.abs(Scrolled) < offset) {
              off = Math.abs(Scrolled);
            }
            //Move div to the right
            let newScrolled = Scrolled + off;
            setScrolled(Scrolled + off);
            setGoLeft(true);

            //used bcz setState needs time to update

            console.log("//Move div to the right and scrolled :", newScrolled);

            if (newScrolled == 0) {
              // @ts-ignore
              left.current["hidden"] = true;
            }
            if (
              Math.abs(newScrolled) !=
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            ) {
              //show
              if (right.current["hidden"]) {
                // @ts-ignore
                right.current["hidden"] = false;
              }
            }
            // @ts-ignore
            // left.current["disabled"] = false;
          }}
        >
          <ChevronLeftIcon className="ml-1 h-4 w-4 font-bold" />
        </button>
        <div
          className="relative col-start-2 mx-1 flex h-[80px] items-center justify-start overflow-hidden bg-white "
          ref={Container}
        >
          <motion.div
            ref={IconSlider}
            initial={false}
            variants={slideVariants}
            animate={goLeft ? "GoLeft" : "GoRight"}
            transition={{ duration: 0.5, type: "spring", bounce: 0, delay: 0 }}
            className="flex h-full shrink-0 select-none flex-row items-center justify-end gap-4 overflow-x-scroll font-semibold tracking-wide text-[#888888] scrollbar-none"
          >
            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Forest"}
            />

            <CategoryIcons
              icon={<GiFarmTractor className="h-6 w-6" />}
              title={"Fermes"}
            />

            <CategoryIcons
              icon={<AiOutlineFire className="h-6 w-6" />}
              title={"Tendance"}
            />

            <CategoryIcons
              icon={<FaSwimmingPool className="h-6 w-6" />}
              title={"Pool"}
            />

            <CategoryIcons
              icon={<TbBeach className="h-6 w-6" />}
              title={"Beach"}
            />

            <CategoryIcons
              className={"flex grow"}
              icon={<GiPisaTower className="h-6 w-6" />}
              title={"Monuments"}
            />

            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats"}
            />
            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island2"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes3"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics2"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats2"}
            />
            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island3"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes2"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics3"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats3"}
            />

            <CategoryIcons
              icon={<GiMountainCave className="h-6 w-6" />}
              title={"Mountains"}
            />

            <CategoryIcons
              icon={<MdOutlineSnowmobile className="h-6 w-6" />}
              title={"Ski-in/out"}
            />

            <CategoryIcons
              icon={<GiTreehouse className="h-6 w-6" />}
              title={"Treehouse"}
            />

            <CategoryIcons
              icon={<IoSnowOutline className="h-6 w-6" />}
              title={"Arctic"}
            />

            <CategoryIcons
              icon={<GiHabitatDome className="h-6 w-6" />}
              title={"Domes"}
            />

            <CategoryIcons
              icon={<MdOutlineSurfing className="h-6 w-6" />}
              title={"Surfing"}
            />

            <CategoryIcons
              icon={<TbWindmill className="h-6 w-6" />}
              title={"Windmils"}
            />

            <CategoryIcons
              icon={<GiGrandPiano className="h-6 w-6" />}
              title={"Grand pianos"}
            />

            <CategoryIcons
              icon={<MdOutlineSportsGolf className="h-6 w-6" />}
              title={"Golf"}
            />

            <CategoryIcons
              icon={<RiCactusLine className="h-6 w-6" />}
              title={"Desert"}
            />

            <CategoryIcons
              icon={<TbBuildingCastle className="h-6 w-6" />}
              title={"Castle"}
            />
          </motion.div>
        </div>
        <button
          ref={right}
          hidden={hideRight ? true : false}
          key="GoRight"
          className="col-start-3 h-7 w-7 cursor-pointer rounded-full border-[1.5px] border-gray-300 shadow-sm transition-all duration-150 ease-in-out hover:scale-[113%] hover:shadow-xl"
          onClick={() => {
            let off = offset;
            //make sure the last sliding is precise
            console.log(
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            );
            if (
              Math.abs(
                Math.abs(Scrolled - offset) -
                  Math.abs(
                    IconSlider.current["offsetWidth"] -
                      Container.current["offsetWidth"]
                  )
              ) < offset
            ) {
              //new offset
              off =
                offset -
                (Math.abs(Scrolled - offset) -
                  Math.abs(
                    IconSlider.current["offsetWidth"] -
                      Container.current["offsetWidth"]
                  ));
            }
            //Move div to the left
            let newScrolled = Scrolled - off;
            setScrolled(Scrolled - off);
            setGoLeft(true);

            //used bcz setState needs time to update

            console.log(
              "//Move div to the left and scrolled :",
              newScrolled,
              IconSlider.current["offsetWidth"],
              Container.current["offsetWidth"]
            );
            //--------------------------------------------------------------------------------//
            //-------------------------------- 2-Check --Hide or Show ---------------------------------------//
            //--------------------------------------------------------------------------------//

            //
            if (
              Math.abs(newScrolled) ==
              Math.abs(
                IconSlider.current["offsetWidth"] -
                  Container.current["offsetWidth"]
              )
            ) {
              // @ts-ignore
              right.current["hidden"] = true;
            }

            if (Math.abs(newScrolled) != 0) {
              //show
              if (left.current["hidden"]) {
                // @ts-ignore
                left.current["hidden"] = false;
              }
            }
          }}
        >
          <ChevronRightIcon className="ml-1 h-4 w-4 font-bold" />
        </button>
        <div className="col-start-4 mx-1 flex h-12 cursor-pointer flex-row items-center justify-center gap-2 self-center rounded-xl border-[1px] bg-white text-center transition-all duration-200 hover:shadow-md">
          <AdjustmentsHorizontalIcon className="h-5" />
          <p className="mb-1 text-[14px]">Filters</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="group/scroll flex border-b-[1px] shadow-md shadow-black/10 sm:hidden">
        <div className="relative col-start-2 mx-2 flex h-[80px] items-center justify-start overflow-x-scroll bg-white scrollbar-none ">
          <motion.div
            initial={false}
            transition={{ duration: 0.5, type: "spring", bounce: 0, delay: 0 }}
            className="flex h-full flex-row items-center justify-end gap-4 font-semibold tracking-wide text-[#888888]"
          >
            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Forest"}
            />

            <CategoryIcons
              icon={<GiFarmTractor className="h-6 w-6" />}
              title={"Fermes"}
            />

            <CategoryIcons
              icon={<AiOutlineFire className="h-6 w-6" />}
              title={"Tendance"}
            />

            <CategoryIcons
              icon={<FaSwimmingPool className="h-6 w-6" />}
              title={"Pool"}
            />

            <CategoryIcons
              icon={<TbBeach className="h-6 w-6" />}
              title={"Beach"}
            />

            <CategoryIcons
              className={"flex grow"}
              icon={<GiPisaTower className="h-6 w-6" />}
              title={"Monuments"}
            />

            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats"}
            />
            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island2"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes3"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats2"}
            />
            <CategoryIcons
              icon={<GiIsland className="h-6 w-6" />}
              title={"Island3"}
            />

            <CategoryIcons
              icon={<HomeModernIcon className="h-6 w-6" />}
              title={"Tiny homes2"}
            />

            <CategoryIcons
              icon={<GiPalmTree className="h-6 w-6" />}
              title={"Tropics2"}
            />

            <CategoryIcons
              icon={<MdHouseboat className="h-6 w-6" />}
              title={"HouseBoats"}
            />

            <CategoryIcons
              icon={<GiMountainCave className="h-6 w-6" />}
              title={"Mountains"}
            />

            <CategoryIcons
              icon={<MdOutlineSnowmobile className="h-6 w-6" />}
              title={"Ski-in/out"}
            />

            <CategoryIcons
              icon={<GiTreehouse className="h-6 w-6" />}
              title={"Treehouse"}
            />

            <CategoryIcons
              icon={<IoSnowOutline className="h-6 w-6" />}
              title={"Arctic"}
            />

            <CategoryIcons
              icon={<GiHabitatDome className="h-6 w-6" />}
              title={"Domes"}
            />

            <CategoryIcons
              icon={<MdOutlineSurfing className="h-6 w-6" />}
              title={"Surfing"}
            />

            <CategoryIcons
              icon={<TbWindmill className="h-6 w-6" />}
              title={"Windmils"}
            />

            <CategoryIcons
              icon={<GiGrandPiano className="h-6 w-6" />}
              title={"Grand pianos"}
            />

            <CategoryIcons
              icon={<MdOutlineSportsGolf className="h-6 w-6" />}
              title={"Golf"}
            />

            <CategoryIcons
              icon={<RiCactusLine className="h-6 w-6" />}
              title={"Desert"}
            />

            <CategoryIcons
              icon={<TbBuildingCastle className="h-6 w-6" />}
              title={"Castle"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
