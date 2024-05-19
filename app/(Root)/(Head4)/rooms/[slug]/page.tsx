import Image from "next/image";
import React from "react";
import { CiMedal } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar4 } from "react-icons/bs";
import { TfiMedallAlt } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import aircover from "../../../../../public/images/aircover.png";

interface roomPageProps {
  params: {
    slug: string;
  };
}

type room = {
  id: number;
  property_name: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  veds: number;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: number;
  distance: number;
};
const getRoom = async (id: string | number) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_api_url + "/api/rooms/getRoom/" + id
  );
  const data = await res.json();
  return data;
};
export default async function Page({ params }: roomPageProps) {
  const { slug } = params;
  const data: room = await getRoom(slug);
  const Images = data?.images.split(",");
  const Size = Images.length;
  const price = Math.floor(data?.price / 30);

  return (
    <div>
      <div className="mx-auto flex max-w-[1250px] flex-col gap-y-2 px-[40px] lg:px-[70px]">
        {/* header & title */}
        <div className="flex h-28 flex-col gap-y-3 py-6">
          <div className="text-[18px] font-semibold xs:text-xl mobile:text-2xl md:text-3xl">
            {data?.property_name}
          </div>
          <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-2 text-xs font-medium mobile:text-base">
            <div className="flex flex-row items-center gap-x-1 text-xs mobile:text-base">
              <AiFillStar className="h-4 w-4 mobile:h-5 mobile:w-5" />
              5.0<span className="font-black">&#183;</span>
              <span className="cursor-pointer truncate font-medium underline">
                51 reviews
              </span>
              <span className="font-black">&#183;</span>
              <TfiMedallAlt />
              Superhost
              <span className="font-black">&#183;</span>
            </div>
            <div className="cursor-pointer truncate font-medium underline">
              {data?.location ?? "City,Country"}
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="mt-6 grid grid-cols-1 gap-x-2 mobile:mt-0 mobile:min-h-[320px] mobile:grid-cols-2">
          {/* image1 */}
          <div className="group relative cursor-pointer overflow-clip rounded-2xl mobile:rounded-r-none">
            <Image
              src={Images[0]}
              style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
              alt=""
              quality={70}
              width={1000}
              height={1000}
              className="aspect-square rounded-2xl transition-all duration-300 ease-out mobile:rounded-r-none mobile:group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 aspect-square h-auto w-full rounded-2xl bg-black/10 opacity-0 transition-all duration-300 ease-out mobile:rounded-r-none mobile:group-hover:opacity-100"></div>
          </div>
          {/* image2 */}
          <div className="hidden grid-cols-2 gap-2 mobile:grid">
            <div className="group relative cursor-pointer overflow-clip">
              <Image
                src={Images[1]}
                style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                alt=""
                quality={70}
                width={1000}
                height={1000}
                className="z-0 h-auto w-auto transition-all duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 z-10 aspect-square h-auto w-full bg-black/10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></div>
            </div>
            <div className="group relative cursor-pointer overflow-clip rounded-r-xl">
              <Image
                src={Images[2]}
                style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                alt=""
                quality={70}
                width={1000}
                height={1000}
                className="z-0 h-auto w-auto rounded-r-xl transition-all duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 z-10 aspect-square h-auto w-full rounded-r-xl bg-black/10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></div>
            </div>
            <div className="group relative cursor-pointer overflow-clip">
              <Image
                src={Images[3]}
                style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                alt=""
                quality={70}
                width={1000}
                height={1000}
                className="z-0 h-auto w-auto transition-all duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 z-10 aspect-square h-auto w-full bg-black/10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></div>
            </div>
            <div className="group relative cursor-pointer overflow-clip rounded-r-xl">
              <Image
                src={Images[4]}
                style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                alt=""
                quality={70}
                width={1000}
                height={1000}
                className="z-0 h-auto w-auto rounded-r-xl transition-all duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 z-10 aspect-square h-auto w-full rounded-r-xl bg-black/10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="grid grid-cols-1 mobile:grid-cols-[1fr_1fr] md:grid-cols-[3fr_2fr]">
          {/* house desc */}
          <div className="flex flex-col divide-y">
            <div className="mb-5 mt-2 flex flex-row items-center justify-between mobile:mb-7 mobile:mt-7 ">
              <div>
                <div className="text-xl font-semibold">
                  {data?.type ?? "Entire guesthouse"} hosted by Henna & Antti
                </div>
                <div className="text-base font-normal text-gray-600">
                  {data?.guests} guests &#183; {data?.bedrooms} bedroom &#183;{" "}
                  {data?.beds} beds &#183; 1 bath
                </div>
              </div>
              <div className="h-14 w-14 rounded-full">
                <Image
                  src={Images[0]}
                  style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                  alt=""
                  quality={70}
                  width={120}
                  height={120}
                  className="h-auto w-auto rounded-full"
                />
              </div>
            </div>
            {/* details */}
            <div className="flex flex-col gap-y-7 py-8">
              <div className="flex flex-grow flex-row gap-x-5">
                {/* icon */}
                <CiMedal className="h-10 w-10 text-gray-700" />
                {/* content */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">
                    Henna & Antti is a Superhost
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              </div>
              <div className="flex flex-grow flex-row gap-x-5">
                {/* icon */}
                <IoLocationOutline className="h-8 w-8 text-gray-700" />
                {/* content */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Great location</p>
                  <p className="text-sm font-medium text-gray-400">
                    100% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
              </div>
              <div className="flex flex-grow flex-row gap-x-5">
                {/* icon */}
                <div className="h-8 w-8">
                  <BsCalendar4 className="ml-1 h-7 w-7 text-gray-600" />
                </div>
                {/* content */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">
                    Free cancellation before Mar 7.
                  </p>
                  {/* <p className="text-sm font-medium text-gray-400">
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p> */}
                </div>
              </div>
            </div>
            {/* aircover */}
            <div className="mb-12 flex flex-col gap-y-7 py-7 mobile:mb-0">
              <div>
                <Image
                  src={aircover}
                  style={{ objectFit: "cover", aspectRatio: 1 / 1 }}
                  alt=""
                  quality={70}
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                />
              </div>
              <div className="text-base font-medium text-gray-700">
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </div>
              <div className="cursor-pointer font-bold underline">
                Learn more
              </div>
            </div>
          </div>
          {/* Reserve */}
          <div className="m-8 ml-14 mr-0 hidden gap-y-6 divide-y-[1px] rounded-2xl border-[1px] p-7 shadow-xl mobile:flex mobile:flex-col">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row items-end justify-between">
                {/* price */}
                <div className="flex flex-row items-end gap-x-1">
                  <div className="text-2xl font-bold">${Math.floor(price)}</div>
                  <div className="text-gray-500">night</div>
                </div>
                <div className="flex flex-row items-end gap-x-1 text-sm font-medium">
                  <AiFillStar className="h-5 w-5" />
                  <div className="flex flex-row items-end gap-x-1">
                    5.0<span className="font-black">&#183;</span>
                    <span className="cursor-pointer font-medium text-gray-500 underline">
                      51 reviews
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid h-28 w-full cursor-pointer grid-cols-2 rounded-lg border-[1px] border-gray-400">
                <div className="flex flex-col items-start justify-center border-r-[1px] border-b-[1px] border-gray-400 px-4">
                  <div className="text-[11px] font-bold uppercase">
                    Check-in
                  </div>
                  <div className="text-sm">1/22/2023</div>
                </div>
                <div className="flex flex-col items-start justify-center border-b-[1px] border-gray-400 px-4">
                  <div className="text-[11px] font-bold uppercase">
                    Checkout
                  </div>
                  <div className="text-sm">1/22/2023</div>
                </div>
                <div className="col-span-2 flex items-center justify-between px-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase">
                      Guests
                    </div>
                    <div className="text-sm">1 guest</div>
                  </div>
                  <IoIosArrowDown className="h-5 w-5 cursor-pointer" />
                </div>
              </div>
              <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 font-bold text-zinc-100 transition-all duration-200 hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-500">
                Reserve
              </div>
              <div className="mx-auto text-gray-500">
                You won't be charged yet
              </div>
              <div className="flex flex-row items-center justify-between font-medium text-gray-600">
                <div className="mt-1 cursor-pointer underline">
                  ${price} x 3 nights
                </div>
                <div>${Math.floor(price) * 3}</div>
              </div>
              <div className="flex flex-row items-center justify-between font-medium text-gray-600">
                <div className="cursor-pointer underline">Service fee</div>
                <div>$180</div>
              </div>
            </div>
            {/* fees */}
            <div className="flex flex-1 flex-row items-end justify-between pb-2 font-bold text-gray-600">
              <div className="cursor-pointer underline">Total before taxes</div>
              <div>${Math.floor(price) * 3 + 180}</div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center border-t-[1px] bg-stone-50 py-1 px-10 mobile:hidden">
            <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 font-bold text-zinc-100 transition-all duration-200 hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-500">
              Reserve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
