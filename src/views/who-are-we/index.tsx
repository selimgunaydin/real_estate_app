import Image from "next/image";
import React from "react";
import smartHome from "../../assets/icons/smart-home.svg";
import userOctagon from "../../assets/icons/user-octagon.svg";

function WhoAreWe() {
  return (
    <div className="mt-[79px]">
      <p className="uppercase text-blue-500 text-[19px] font-medium mb-5 lg:mb-10">
        WHO ARE WE
      </p>
      <div className="grid grid-cols-12 gap-6 lg:gap-[43px]">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-6">
          <h1 className="font-semibold text-[30px] md:text-[40px] mb-5 md:mb-[30px] text-dark leading-[36px] md:leading-[47px]">
            Assisting individuals in locating the appropriate real estate.
          </h1>
          <p className="text-[#808080] font-normal text-sm md:text-base leading-[22px] md:leading-[26px] mb-6 md:mb-10">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it.
          </p>
          <div className="flex-col gap-6 md:w-[400px] w-full hidden md:flex">
            <div className="box-custom-shadow items-center flex gap-5 p-6 rounded-[20px]">
              <Image src={smartHome} alt="Smart Home" className="w-10 h-10" />
              <div className="flex flex-col gap-3">
                <h4 className="text-secondary font-medium text-lg leading-none">
                  Lorem ipsum has been the
                </h4>
                <span className="text-[#808080]">
                  when an unknown printer took a galley
                </span>
              </div>
            </div>
            <div className="box-custom-shadow flex items-center gap-5 p-6 rounded-[20px]">
              <Image
                src={userOctagon}
                alt="User Octagon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-3">
                <h4 className="text-secondary font-medium text-lg leading-none">
                  Lorem ipsum has been the
                </h4>
                <span className=" text-[#808080]">
                  when an unknown printer took a galley
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4">
          <Image
            src="/images/who-are-we-1.jpeg"
            width={280}
            height={500}
            alt="Smart Home"
            className="col-span-6 rounded-[20px] box-custom-shadow w-full object-cover h-[200px] md:h-[500px] image-shadow self-end"
          />
          <div className="col-span-6 flex flex-col gap-4">
            <Image
              src="/images/who-are-we-2.jpeg"
              width={277}
              height={280}
              alt="Who Are We 2"
              className="rounded-[20px] box-custom-shadow w-full h-[150px] md:h-[280px] object-cover image-shadow"
            />
            <Image
              src="/images/who-are-we-3.jpeg"
              width={277}
              height={180}
              alt="Who Are We 3"
              className="rounded-[20px] box-custom-shadow w-full h-[100px] md:h-[180px] object-cover image-shadow"
            />
          </div>
        </div>

        {/* Mobile Hidden Section */}
        <div className="col-span-12 flex flex-col gap-6 md:hidden">
          <div className="box-custom-shadow flex gap-5 p-6 rounded-[20px]">
            <Image src={smartHome} alt="Smart Home" className="w-10 h-10" />
            <div className="flex flex-col gap-3">
              <h4 className="text-secondary font-medium text-lg leading-none">
                Lorem ipsum has been the
              </h4>
              <span className="text-sm text-[#808080] leading-none">
                when an unknown printer took a galley
              </span>
            </div>
          </div>
          <div className="box-custom-shadow flex gap-5 p-6 rounded-[20px]">
            <Image src={userOctagon} alt="User Octagon" className="w-10 h-10" />
            <div className="flex flex-col gap-3">
              <h4 className="text-secondary font-medium text-lg leading-none">
                Lorem ipsum has been the
              </h4>
              <span className="text-sm text-[#808080] leading-none">
                when an unknown printer took a galley
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
