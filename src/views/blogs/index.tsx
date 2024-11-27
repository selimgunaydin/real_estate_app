"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/src/components/Button";

const blogData = [
  {
    src: "/images/blog-1.jpeg",
    alt: "Swiper 1",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    src: "/images/blog-2.jpeg",
    alt: "Swiper 2",
    title: "How to Stage Your Home for a Quick Sale",
    desc: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
  {
    src: "/images/blog-3.jpeg",
    alt: "Swiper 3",
    title: "5 Tips for First-Time Home Sellers",
    desc: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
  },
  {
    src: "/images/blog-1.jpeg",
    alt: "Swiper 4",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
];

function Blogs() {
  return (
    <div className="mt-[94px] pt-[100px] md:pt-[110px] pb-[100px] md:pb-[250px] flex justify-center bg-primary flex-col items-center relative">
      <div className="flex justify-center items-center flex-col relative container">
        <div className="flex flex-col items-center mb-20">
          <p className="uppercase font-medium text-[19px] leading-[29px] text-white mb-[30px]">
            WHAT’S TRENDING
          </p>
          <h2 className="font-semibold text-[40px] leading-[47px] text-white">
            Latest Blogs & Posts
          </h2>
        </div>
        <div className="relative hidden md:flex justify-center items-center container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: "#swiper-button-next",
              prevEl: "#swiper-button-prev",
            }}
            spaceBetween={50}
            pagination={{
              clickable: true,
              el: ".custom-pagination-blog",
            }}
            loop
            slidesPerView={3}
            className="w-full h-full"
          >
            {blogData.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="rounded-[20px]"
                  width={340}
                  height={240}
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-white text-[28px] font-medium leading-[41px] mb-5">
                    {item.title}
                  </h3>
                  <p className="text-[#D4D4D4] text-base leading-[26px]">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination custom-pagination-blog !flex !justify-center absolute !-bottom-[150px] !left-auto"></div>
        <div
          id="swiper-button-next"
          className="custom-nav absolute -bottom-24 right-1/3 transform -translate-y-1/2 z-10 cursor-pointer bg-white w-10 h-10 hidden md:flex items-center justify-center rounded-full shadow-lg"
          aria-label="Next Slide"
        >
          <Image src={arrowRight} alt="Arrow Right" width={16} height={16} />
        </div>
        <div
          id="swiper-button-prev"
          className=" custom-nav absolute -bottom-24 left-1/3 transform -translate-y-1/2 z-10 cursor-pointer bg-white w-10 h-10 hidden md:flex items-center justify-center rounded-full shadow-lg"
          aria-label="Previous Slide"
        >
          <Image src={arrowLeft} alt="Arrow Left" width={16} height={16} />
        </div>
        <div className="flex md:hidden flex-col w-full gap-10">
          {blogData.map((item, index) => (
            <div key={index} className="w-full">
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-[20px] w-full"
                width={340}
                height={240}
                priority
              />
              <div className="mt-5">
                <h3 className="text-white text-[28px] font-medium leading-[41px] mb-5">
                  {item.title}
                </h3>
                <p className="text-[#D4D4D4] text-base leading-[26px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          label="View more blogs"
          className="flex md:hidden bg-white text-primary mt-[60px] w-[195px] self-start"
        />
      </div>
    </div>
  );
}

export default Blogs;
