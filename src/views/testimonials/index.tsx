"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import testimonalQuote from "../../assets/icons/testimonial-quote.svg";
import starIcon from "../../assets/icons/star.svg";
import starFill from "../../assets/icons/star-fill.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const dummyData = [
  {
    name: "Barbara D. Smith",
    star: 4,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    image: "/images/testimonial-1.jpeg",
  },
  {
    name: "Selim Günaydın",
    star: 2,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    image: "/images/testimonial-1.jpeg",
  },
  {
    name: "Test D. Smith",
    star: 3,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    image: "/images/testimonial-1.jpeg",
  },
];

function Testimonials() {
  return (
    <div className="container pt-[100px] md:pt-[160px] grid grid-cols-12">
      <div className="max-w-[415px] col-span-12 lg:col-span-6">
        <p className="uppercase text-secondary text-[19px] font-medium mb-5 lg:mb-[30px]">
          Testimonials
        </p>
        <h1 className="font-semibold text-[30px] md:text-[40px] mb-5 md:mb-[30px] text-dark leading-[36px] md:leading-[47px] ">
          Look What Our Customers Say!
        </h1>
        <p className="text-[#808080] font-normal text-sm md:text-base leading-[22px] md:leading-[26px] mb-[30px] md:mb-0">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est
          pellentesque.
        </p>
        <div className="gap-[50px] mt-[60px] hidden lg:flex">
          <div
            id="swiper-button-prev"
            className="border rounded-full border-primary h-[50px] w-[50px] flex items-center justify-center cursor-pointer"
            aria-label="Previous Slide"
          >
            <Image src={arrowLeft} alt="Arrow Left" width={16} height={16} />
          </div>
          <div
            id="swiper-button-next"
            className="border rounded-full border-primary h-[50px] w-[50px] flex items-center justify-center cursor-pointer"
            aria-label="Next Slide"
          >
            <Image src={arrowRight} alt="Arrow Right" width={16} height={16} />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="relative flex justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: "#swiper-button-next",
              prevEl: "#swiper-button-prev",
            }}
            className="rounded-[30px]"
            pagination
            slidesPerView={1}
          >
            {dummyData.map((item, index) => (
              <SwiperSlide key={index} className="p-1 md:p-12 rounded-[30px]">
                <div className="px-[60px] py-[34px] flex flex-col rounded-[30px] border-2 lg:border-none custom-shadow">
                  <Image src={testimonalQuote} alt="Testimonial Quote" />
                  <p className="text-dark text-[19px] font-medium leading-[29px] mt-5 border-[#D4D4D4] border-b pb-6 mb-5">
                    {item.text}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[15px]">
                      <Image
                        src={item.image}
                        alt="Testimonial Image"
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                      <h4 className="text-dark font-medium text-[20px] leading-[24px] mt-4">
                        {item.name}
                      </h4>
                    </div>
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <Image
                          key={index}
                          className="mx-0.5"
                          src={star <= item.star ? starFill : starIcon}
                          alt="Star"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
