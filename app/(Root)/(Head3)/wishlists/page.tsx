import React from "react";
type Props = {};

export default function wishlists({}: Props) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full h-full mx-auto px-3 max-w-[1200px]">
        <div className="h-32 flex items-center justify-between text-4xl font-bold mx-3 pt-6">
          <div>Whishlists</div>
        </div>
        <div className="text-start text-xl font-bold items-start p-5 flex flex-col gap-y-2">
          <div>Create your first wishlist</div>
          <div className="font-normal text-base text-gray-500 leading-5">
            As you search, tap the heart icon to save your favorite places to
            stay or things to do to a wishlist.
          </div>
        </div>
      </div>
    </div>
  );
}
