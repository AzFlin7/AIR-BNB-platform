"use client";
import React from "react";
import Header from "../../../../components/Header";
import Header_Logged from "../../../../components/Header_Logged";
import { unstable_getServerSession } from "next-auth/next";
import { format } from "date-fns";
import { usePagination } from "../../../../Hooks/usePagination";
import Loading_Card from "../../../../components/Loaders/Loading_Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../../../components/Card";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import FooterLogged from "../../../../components/FooterLogged";
import Footer from "../../../../components/Footer";

type Props = {
  searchParams?: {
    location: string;
    startDate: string;
    endDate: string;
    guests: string;
  };
};
type room = {
  id: number;
  property_name: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  veds: number;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: number;
  distance: number;
};
export default function Search() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  let startDate = "";
  if (searchParams.get("startDate") && searchParams.get("startDate") !== "") {
    startDate = format(
      new Date(searchParams.get("startDate") + "") ?? "2023-01-01",
      "dd MMMM"
    );
  }
  let endDate = "";
  if (searchParams.get("endDate") && searchParams.get("endDate") !== "") {
    endDate = format(
      new Date(searchParams.get("endDate") + "") ?? "2023-01-01",
      "dd MMMM"
    );
  }
  function getDuration(startDate: string, endDate: string) {
    return `${startDate} - ${endDate}`;
  }

  //inifinite scroll declarations
  const map: number[] = Array(12).fill(1);
  const {
    data,
    lastPage,
    isReachedEnd,
    loadingMore,
    isLoading,
    setSize,
    paginatedData,
    size,
    error,
  } = usePagination<room>(
    process.env.NEXT_PUBLIC_api_url +
      "/api/rooms/search/" +
      searchParams.get("location")
  );
  return (
    <div>
      <header id="header" className="fixed top-0 z-20">
        {session ? (
          <Header_Logged
            placeholder={`${searchParams.get("location") ?? "Location"} | ${
              getDuration(startDate, endDate) ?? "01-02 January"
            } | ${searchParams.get("guests") ?? 2} guests`}
          />
        ) : (
          <Header
            placeholder={`${searchParams.get("location") ?? "Location"} | ${
              getDuration(startDate, endDate) ?? "01-02 January"
            } | ${searchParams.get("guests") ?? 2} guests`}
          />
        )}
      </header>
      <section className="z-0 mx-auto mt-[200px] mb-20" id="Content">
        <div
          className="relative mx-10 my-8 flex-1 flex-col self-start overflow-visible lg:mx-20"
          style={{
            overflowX: "visible",
          }}
        >
          <InfiniteScroll
            className="mx-auto"
            next={() => setSize(size + 1)}
            hasMore={!isReachedEnd}
            style={{ overflow: "visible" }}
            loader={
              <div className="relative mx-auto grid max-w-[2350px] grid-cols-1 gap-3 overflow-visible scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg2:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 ">
                {(isLoading || loadingMore) &&
                  map.map(() => {
                    return <Loading_Card key={Math.random()} />;
                  })}
              </div>
            }
            endMessage={
              <div className="flex h-20 w-full items-center justify-center rounded-full">
                <div className="h-3 w-3 rounded-full bg-gray-300 drop-shadow-md"></div>
              </div>
            }
            dataLength={data.length}
          >
            <div className="relative mx-auto grid max-w-[2350px] grid-cols-1 gap-3 overflow-visible scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg2:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 ">
              {data.map((room: room, index: number) => {
                let imagesa = room.images.split(",");
                return (
                  <Card
                    key={index}
                    id={room.id}
                    source={imagesa}
                    title={room.property_name}
                    price={room.price}
                    distance={room.distance}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </section>
      <footer id="footer" className="fixed bottom-[0px] z-50 self-end">
        {session ? <FooterLogged data={data} /> : <Footer data={data} />}
      </footer>
    </div>
  );
}
