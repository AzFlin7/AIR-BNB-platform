//@ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import Map, { MapRef, Marker, NavigationControl, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import getDistance from "geolib/es/getDistance";
import mapboxgl, { Point } from "mapbox-gl";
import { FaMapPin } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { HiMapPin } from "react-icons/hi2";
import { MdOutlineGpsFixed } from "react-icons/md";
import { MapPinIcon } from "@heroicons/react/24/solid";
type Props = {
  data?: room[];
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
type coordinate = {
  longitude: number;
  latitude: number;
};
type coordinateString = {
  longitude: string;
  latitude: string;
};
export default function LocationMap({ data }: Props) {
  const mapContainer = useRef<MapRef>();
  const [selected, setSelected] = useState<room>();
  const [center, setcenter] = useState();
  const coordinates = data?.map((res: room) => ({
    longitude: res.long,
    latitude: res.lat,
  }));
  const Center = (lg, lt) => {
    if (lg && lt) {
      mapContainer.current?.setCenter(new mapboxgl.LngLat(lg, lt));
      console.log("center was set to :", lg + " " + lt);
    }
  };
  console.log(data);
  useEffect(() => {
    const center: coordinate = getCenter(coordinates);
    setcenter(center);
    console.log(center);
    if (center) Center(center.longitude, center.latitude);
  }, []);
  const GotoCenter = () => {
    Center(center?.longitude, center?.latitude);
    //set zoom
    mapContainer.current?.setZoom(5);
  };
  const API_KEY = "G37xRluKpwmumvaEmjcF";
  return (
    <Map
      ref={mapContainer}
      mapLib={maplibregl}
      initialViewState={{
        zoom: 5,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={`https://api.maptiler.com/maps/5edc74bb-f04c-482b-98dc-60773bd5aa8a/style.json?key=G37xRluKpwmumvaEmjcF`}
    >
      <NavigationControl position="top-right" />
      {data?.map((room: room, i: number) => {
        return (
          <div className="relative" key={room.lat + "-" + i}>
            <Marker
              longitude={room.long as unknown as number}
              latitude={room.lat as unknown as number}
              color={"#ff385c"}
            >
              <HiMapPin
                fill="#ff385c"
                color="#ff385c"
                aria-label="push-pin"
                onClick={() => {
                  Center(room.long, room.lat);
                  mapContainer.current?.setZoom(20);
                  setSelected(room);
                }}
                className="h-9 w-9 animate-bounce text-4xl drop-shadow-lg"
              ></HiMapPin>
              {selected?.id === room.id ? (
                <div className="absolute truncate rounded-xl bg-white py-4 px-3 font-semibold text-stone-700">
                  {room.property_name}
                </div>
              ) : (
                false
              )}
            </Marker>
          </div>
        );
      })}
      <div
        onClick={GotoCenter}
        className="absolute top-28 right-0 mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[2px] bg-white active:scale-[97%]"
      >
        <MdOutlineGpsFixed className="h-5 w-5"></MdOutlineGpsFixed>
      </div>
    </Map>
  );
}
