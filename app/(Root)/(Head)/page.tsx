"use client";
import Card from "../../../components/Card";
import Loading_Card from "../../../components/Loaders/Loading_Card";
import { usePagination } from "../../../Hooks/usePagination";
import InfiniteScroll from "react-infinite-scroll-component";
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

export default function Home() {
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
  } = usePagination<room>(process.env.NEXT_PUBLIC_api_url + "/api/rooms/list");

  return (
    <div
      className="relative mx-10 my-8 flex-1 flex-col self-start overflow-visible mobile:mx-4 lg:mx-14"
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
                id={room.id}
                key={index}
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
  );
}
