"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

type Props = {
  setGuests: Dispatch<SetStateAction<number>>;
};

export default function BuyComponent({ setGuests }: Props) {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="flex h-6 w-12 flex-row items-center justify-end gap-x-1 text-stone-100">
      <div className="w-4 select-none text-center text-lg font-semibold text-rose-500">
        {count}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-center text-base font-bold text-gray-500 transition-all duration-200 hover:text-gray-800"
          onClick={() => {
            setGuests(count + 1);
            setCount(count + 1);
          }}
        >
          <AiFillCaretUp />
        </div>
        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-center text-base font-bold text-gray-500 transition-all duration-200 hover:text-gray-800"
          onClick={() => {
            if (count - 1 >= 1) {
              setGuests(count - 1);
              setCount(count - 1);
            }
          }}
        >
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
}
