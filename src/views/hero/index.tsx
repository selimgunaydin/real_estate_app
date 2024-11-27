"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchForm from "../search-form";

const swiperData = [
  {
    src: "/images/room-1.jpeg",
    alt: "Room 1",
  },
  {
    src: "/images/room-1.jpeg",
    alt: "Room 2",
  },
  {
    src: "/images/room-1.jpeg",
    alt: "Room 3",
  },
  {
    src: "/images/room-1.jpeg",
    alt: "Room 4",
  },
];

const personData = [
  {
    name: "John Doe",
    position: "CEO",
    src: "/images/person-1.jpeg",
    alt: "Person 1",
  },
  {
    name: "Jane Doe",
    position: "CTO",
    src: "/images/person-2.jpeg",
    alt: "Person 2",
  },
  {
    name: "John Doe",
    position: "CEO",
    src: "/images/person-3.jpeg",
    alt: "Person 1",
  },
  {
    name: "Jane Doe",
    position: "CTO",
    src: "/images/person-4.jpeg",
    alt: "Person 2",
  },
  {
    name: "Jane Doe",
    position: "CTO",
    src: "/images/person-5.jpeg",
    alt: "Person 2",
  },
  {
    name: "Jane Doe",
    position: "CTO",
    src: "/images/person-5.jpeg",
    alt: "Person 2",
  },
];

function Hero() {
  return (
    <>
      <div className="hero-bg"></div>
      <div className="mt-6 md:mt-[89px]">
        <p className="uppercase text-blue-500 text-[19px] font-medium mb-5 lg:mb-[30px]">
          Real Estate
        </p>

        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <h1 className="font-semibold text-[57px] leading-[65px] mb-[30px]  md:mb-10 text-dark">
              Find a perfect home you love..!
            </h1>
            <p className="text-[#808080] font-normal text-base leading-[26px] mb-9 md:mb-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="relative max-md:mb-8">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: "#swiper-button-next",
                  prevEl: "#swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                loop
                className="w-full h-full"
              >
                {swiperData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="responsive"
                        className="rounded-[20px]"
                        width={1920}
                        height={1080}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="w-full custom-pagination flex !justify-between !mt-1"></div>
              <div
                id="swiper-button-next"
                className="custom-nav absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image
                  src={chevronRight}
                  alt="Arrow Right"
                  height={6}
                  width={6}
                />
              </div>
              <div
                id="swiper-button-prev"
                className=" custom-nav absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image src={chevronLeft} alt="Arrow Left" height={6} width={6} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-start">
            <SearchForm />
          </div>
          <div className="col-span-12 flex flex-col md:flex-row justify-center gap-[28px] md:gap-[30px] mt-9 md:mt-[60px]">
            <div className="py-[28px] px-[37px] bg-white rounded-[50px] custom-shadow flex gap-2.5 items-center w-full md:w-auto">
              <div className="flex -space-x-3">
                {personData.map((person, index) => {
                  const isLastIndex = index === personData.length - 1;
                  return (
                    <div
                      key={index}
                      className="relative w-9 h-9 rounded-full border-2 border-white flex-shrink-0"
                    >
                      <Image
                        src={person.src}
                        alt={person.alt}
                        width={36}
                        height={36}
                        className="rounded-full object-cover w-full h-full"
                      />
                      {isLastIndex && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-[19px]">
                            +
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="font-medium text-[19px] leading-[29px] w-[122px]">
                72k+ Happy Customers
              </p>
            </div>
            <div className="py-[28px] px-[37px] bg-white rounded-[50px] custom-shadow flex gap-2.5 items-center w-full md:w-auto">
              <div className="flex -space-x-3">
                <Image
                  src={"/images/home-1.jpeg"}
                  alt="Home 1"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-[60px] h-[60px]"
                />
              </div>
              <p className="font-medium text-[19px] leading-[29px] w-[174px]">
                200+ New Listings Everyday!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
