"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/src/components/Button";
import clsx from "clsx";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Navigation, Pagination } from "swiper/modules";
import Badge from "@/src/components/Badge";
import Image from "next/image";
import bathroom from "@/src/assets/icons/bathroom.svg";
import bed from "@/src/assets/icons/bed.svg";

const dummyData = [
  {
    price: "$5,970",
    title: "Tranquil Haven in the Woods",
    address: "103 Wright CourtBurien, WA 98168",
    beds: 4,
    baths: 3,
    badge: "popular" as const,
    image: "/images/rent-1.jpeg",
    type: "rent",
  },
  {
    price: "$1,970",
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    beds: 3,
    baths: 2,
    badge: "new-listing" as const,
    image: "/images/rent-2.jpeg",
    type: "sell",
  },
  {
    price: "$3,450",
    title: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm RoadHarlan, 51537",
    beds: 4,
    baths: 4,
    badge: "discounted" as const,
    image: "/images/rent-3.jpeg",
    type: "rent",
  },
  {
    price: "$2,389",
    title: "Grand Estate on the Hilltop",
    address: "103 Wright CourtBurien, WA 98168",
    beds: 4,
    baths: 4,
    badge: "popular" as const,
    image: "/images/rent-3.jpeg",
    type: "sell",
  },
];

function OurNew() {
  const [activeTab, setActiveTab] = useState<"all" | "sell" | "rent">("all");

  const filteredData =
    activeTab === "all"
      ? dummyData
      : dummyData.filter((item) => item.type === activeTab);

  return (
    <div className="mt-[100px] md:mt-[200px]">
      <p className="uppercase text-secondary text-[19px] font-medium mb-5 lg:mb-[30px]">
        Checkout our new
      </p>
      <div className="flex flex-col md:flex-row w-full justify-between mb-[40px] md:mb-0">
        <div className="max-w-[500px]">
          <h1 className="font-semibold text-[30px] md:text-[40px] mb-5 md:mb-[30px] text-dark leading-[36px] md:leading-[47px]">
            Latest Listed Properties
          </h1>
          <p className="text-[#808080] font-normal text-sm md:text-base leading-[22px] md:leading-[26px] mb-[40px] md:mb-0">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex gap-5 items-start">
          <Button
            className={twMerge(
              clsx(
                "px-[30px] py-[19px] bg-white border border-primary text-primary hover:text-white hover:bg-primary hover:border-primary leading-none",
                activeTab === "all" && "bg-primary text-white"
              )
            )}
            onClick={() => setActiveTab("all")}
            label="All"
          />
          <Button
            className={twMerge(
              clsx(
                "px-[30px] py-[19px] bg-white border border-primary text-primary hover:text-white hover:bg-primary hover:border-primary leading-none",
                activeTab === "sell" && "bg-primary text-white"
              )
            )}
            onClick={() => setActiveTab("sell")}
            label="Sell"
          />
          <Button
            className={twMerge(
              clsx(
                "px-[30px] py-[19px] bg-white border border-primary text-primary hover:text-white hover:bg-primary hover:border-primary leading-none",
                activeTab === "rent" && "bg-primary text-white"
              )
            )}
            onClick={() => setActiveTab("rent")}
            label="Rent"
          />
        </div>
      </div>
      <div className="hidden md:block mt-[50px] -mr-[calc(50vw-50%)]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.4,
            },
          }}
        >
          {filteredData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src={item.image}
                    width={340}
                    height={340}
                    alt={item.title}
                    className="w-full h-[340px] object-cover rounded-[30px]"
                  />
                  <div className="absolute bottom-[30px] left-[30px]">
                    <Badge mode={item.badge} />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="font-semibold text-[28px] mb-2">
                    {item.price}
                  </h3>
                  <h4 className="text-gray-700 text-[19px] font-medium mb-2 truncate">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 mb-4 truncate">{item.address}</p>
                  <div className="flex gap-5 text-gray-500">
                    <span className="flex gap-2.5">
                      <Image src={bed} alt="bed" width={24} height={24} />{" "}
                      {item.beds} Beds
                    </span>
                    <span className="flex gap-2.5">
                      <Image
                        src={bathroom}
                        alt="bathroom"
                        width={24}
                        height={24}
                      />{" "}
                      {item.baths} Baths
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-[30px] md:hidden">
          {filteredData.map((item, index) => {
            return (
              <div className="bg-white rounded-lg overflow-hidden" key={index}>
              <div className="relative">
                <Image
                  src={item.image}
                  width={340}
                  height={340}
                  alt={item.title}
                  className="w-full h-[340px] object-cover rounded-[30px]"
                />
                <div className="absolute bottom-[30px] left-[30px]">
                  <Badge mode={item.badge} />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="font-semibold text-[28px] mb-2">
                  {item.price}
                </h3>
                <h4 className="text-gray-700 text-[19px] font-medium mb-2 truncate">
                  {item.title}
                </h4>
                <p className="text-gray-500 mb-4 truncate">{item.address}</p>
                <div className="flex gap-5 text-gray-500">
                  <span className="flex gap-2.5">
                    <Image src={bed} alt="bed" width={24} height={24} />{" "}
                    {item.beds} Beds
                  </span>
                  <span className="flex gap-2.5">
                    <Image
                      src={bathroom}
                      alt="bathroom"
                      width={24}
                      height={24}
                    />{" "}
                    {item.baths} Baths
                  </span>
                </div>
              </div>
            </div>
            )
          })}
  <div className="flex justify-center mt-5">
  {filteredData.length > 3 && (
          <Button
            className="border bg-white border-primary text-primary w-[233px] hover:text-white hover:bg-primary hover:border-primary"
            label="View more properties"
            
          />
        )}
  </div>
      </div>
    </div>
  );
}

export default OurNew;
