import React from "react";
import Loading_Card from "../../../components/Loaders/Loading_Card";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="relative mx-10 my-8 flex-1 overflow-visible lg:mx-20">
      {/* List of houses */}
      {/* <p>{theme?.value}</p> */}
      {/* {"qsdsqd::" + session?.user?.name} */}
      <div className="relative mx-auto grid max-w-[2350px] grid-cols-1 gap-3 overflow-visible scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg2:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 ">
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
        <Loading_Card />
      </div>
    </div>
  );
}
