"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  source: StaticImageData | string[];
  title: string;
  id: number;
  price: number;
  distance: number;
  alt?: string;
};

export default function Card({ id, distance, source, price, title }: Props) {
  const [focus, setfocus] = useState("border-gray-300/0 bg-gray-100/0");
  const [loaded, setloaded] = useState("pulse");
  return (
    <div
      className={`group relative inline-grid cursor-pointer grid-rows-[2fr_minmax(0px,1fr)] overflow-visible rounded-2xl border-[1px] p-2 text-left transition-all duration-300 ease-out ${focus} hover:scale-[103%] hover:border-gray-300 hover:bg-gray-100 hover:shadow-lg mobile:grid-rows-[2fr_minmax(135px,170px)]`}
    >
      <div>
        {/* <AiOutlineHeart className="absolute top-0 right-0 bottom-0 z-20 m-4 bg-gray-700/40 text-white "/> */}
        <Carousel
          className="aspect-square overflow-clip rounded-xl transition-all duration-200"
          swipeable={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={250}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <button
                key="GoLeft"
                className={`${
                  hasPrev
                    ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                    : ""
                } absolute top-[48%] bottom-0 left-0 z-10 ml-4 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-200 ease-in-out mobile:hidden mobile:border-[1.5px] mobile:group-hover:flex`}
                onClick={clickHandler}
                disabled={!hasPrev}
              >
                <ChevronLeftIcon className="mx-auto h-[14px] w-[14px] font-bold" />
              </button>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <button
                key="GoRight"
                className={`${
                  hasNext
                    ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                    : ""
                } absolute top-[48%] bottom-0 right-0 z-10 mr-4 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-200 ease-in-out mobile:hidden mobile:border-[1.5px] mobile:group-hover:flex`}
                onClick={clickHandler}
                disabled={!hasNext}
              >
                <ChevronRightIcon className="mx-auto h-[14px] w-[14px] font-bold " />
              </button>
            );
          }}
        >
          {(source as string[]).map((image: string, index: number) => {
            return (
              <div
                className={`aspect-square h-full w-full overflow-clip rounded-xl bg-gray-300 animate-${loaded}`}
                key={image}
              >
                <Image
                  src={image}
                  style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                  alt="image"
                  quality={60}
                  width={1000}
                  height={1000}
                  onLoad={() => setloaded("none")}
                  // placeholder="blur"
                  className="h-auto w-auto rounded-xl transition-all duration-300 ease-out hover:scale-110"
                />
              </div>
            );
          })}
        </Carousel>
        <HeartIcon
          className="absolute top-0 right-0 bottom-0 m-6 h-7 w-7 scale-100 fill-black/60 text-zinc-200 transition-all duration-200 active:scale-95 active:fill-rose-500"
          // fill="#00000080"
        />
      </div>

      {/* info about house */}
      <Link
        href={"/rooms/" + id}
        className="group/loading mt-5"
        onFocus={(e) => {
          setfocus("scale-[103%] border-gray-300 bg-gray-100 shadow-lg");
        }}
        onBlur={(e) => {
          setfocus("border-gray-300/0 bg-gray-100/0");
        }}
      >
        <div className="text-[15px] font-bold">{title}</div>
        <div className="text-gray-500">{distance} kilometers away</div>
        <div className="text-gray-500">jun 9-11</div>
        <div className="font-semibold">
          ${Math.floor(price / 30)}{" "}
          <span className="text-[15px] font-normal">night</span>
        </div>
        <div className="collapse absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-b font-semibold tracking-widest text-neutral-200 opacity-0 transition-all duration-500 group-focus/loading:visible group-focus/loading:from-stone-500 group-focus/loading:opacity-100">
          <span className="animate-pulse">Loading...</span>
        </div>
      </Link>
    </div>
  );
}
