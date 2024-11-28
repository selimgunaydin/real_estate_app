import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Select from "@/src/components/Select";
import Image from "next/image";
import search from "@/src/assets/icons/search.svg";
import settings from "@/src/assets/icons/settings.svg";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useState } from "react";
const SearchForm = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full lg:w-[420px] bg-white rounded-[20px] flex flex-col custom-shadow">
      <div className="border-b border-[#AAA] pt-10 flex w-full">
        <p
          className={twMerge(
            clsx(
              "text-center text-base text-primary font-medium pb-[29px] w-full mx-10 leading-none cursor-pointer",
              activeTab == 1 && "border-b-2 border-primary"
            )
          )}
          onClick={() => setActiveTab(1)}
        >
          For Sale
        </p>
        <p
          className={twMerge(
            clsx(
              "text-center text-base text-primary font-medium pb-[29px] w-full mx-10 leading-none cursor-pointer",
              activeTab == 2 && "border-b-2 border-primary"
            )
          )}
          onClick={() => setActiveTab(2)}
        >
          For Rent
        </p>
      </div>
      {activeTab === 1 ? <SaleForm /> : <RentForm />}
    </div>
  );
};

const SaleForm = () => {
  return (
    <form className="space-y-[30px] p-10 pt-[51px] pb-[60px]">
      <Input
        className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[24px] px-[20px] text-base w-full border-none"
        placeholder="New York, San Francisco, etc"
      />
      <Select
        className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[25px] px-[20px] text-base w-full border-none"
        options={["Select Property Type", "Apartment", "House", "Studio"]}
      />
      <div>
        <Select
          className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[25px] px-[20px] w-full border-none"
          options={["Select Rooms", "1 Room", "2 Rooms", "3 Rooms"]}
        />
        <p className="mt-5 flex gap-2.5 cursor-pointer">
          <Image src={settings} height={14} width={14} alt="advanced-search" />
          <span className="text-primary text-sm">Advance Search</span>
        </p>
      </div>
      <Button
        label="Search"
        icon={<Image src={search} width={20} height={20} alt="search" />}
        type="submit"
        className="w-full"
      />
    </form>
  );
};

const RentForm = () => {
  return (
    <form className="space-y-[30px] p-10 pt-[51px] pb-[60px]">
    <Input
      className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[24px] px-[20px] text-base w-full border-none"
      placeholder="Trabzon, Istanbul, etc"
    />
    <Select
      className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[25px] px-[20px] text-base w-full border-none"
      options={["Select Property Type", "Apartment", "House", "Studio"]}
    />
    <div>
      <Select
        className="bg-[#d4d4d433] text-[#AAA] rounded-[20px] py-[25px] px-[20px] w-full border-none"
        options={["Select Rooms", "1 Room", "2 Rooms", "3 Rooms"]}
      />
      <p className="mt-5 flex gap-2.5 cursor-pointer">
        <Image src={settings} height={14} width={14} alt="advanced-search" />
        <span className="text-primary text-sm">Advance Search</span>
      </p>
    </div>
    <Button
      label="Search"
      icon={<Image src={search} width={20} height={20} alt="search" />}
      type="submit"
      className="w-full"
    />
  </form>
  );
};

export default SearchForm;
