import React from "react";

type Props = {};

export default function trips({}: Props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-x-1 flex h-full max-w-[1300px] flex-1 flex-col divide-y px-4 mobile:px-12 lg:px-20">
        <div className="flex h-24 items-center justify-between px-4 text-start">
          <p className="mt-2 text-4xl font-semibold">Trips</p>
        </div>
        <div className="flex flex-col items-start gap-y-2 p-5 py-8 text-start text-lg font-bold">
          <div>No trips booked...yet!</div>
          <div className="text-base font-normal leading-5 text-gray-500">
            Time to dust off your bags and start planning your next adventure
          </div>
          <div className="mt-5 flex h-14 cursor-pointer select-none items-center justify-center rounded-3xl border-[1px] border-black p-3 transition-all duration-200 hover:bg-gray-100">
            Start searching
          </div>
        </div>
        <div className="py-8">
          Can't find your reservation here?
          <span className="underline">Visit the Help Center</span>
        </div>
      </div>
    </div>
  );
}
