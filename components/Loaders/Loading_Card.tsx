import React from "react";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className="relative grid cursor-pointer grid-rows-[2fr,1fr] overflow-visible rounded-2xl border-[1px] border-gray-300/0 bg-gray-100/0 p-2 text-left">
      <div className="aspect-square h-auto w-auto animate-pulse overflow-clip rounded-xl bg-gray-300"></div>

      {/* info about house */}
      <div className="mt-5 grid grid-cols-1 ">
        <div className="h-2 w-1/4 animate-pulse rounded-full bg-gray-300 text-[15px] font-bold"></div>
        <div className="h-2 w-1/2 animate-pulse rounded-full bg-gray-300 text-gray-500"></div>
        <div className="h-2 w-1/3 animate-pulse rounded-full bg-gray-300 text-gray-500"></div>
        <div className="h-2 w-1/3 animate-pulse rounded-full bg-gray-300 font-semibold"></div>
      </div>
    </div>
  );
}
