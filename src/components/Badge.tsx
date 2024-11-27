import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import homeIcon from "../assets/icons/home-icon.svg";
import dollars from "../assets/icons/dollars.svg";
import fire from "../assets/icons/fire.svg";

type badgeProps = {
  mode: "popular" | "new-listing" | "discounted";
};

const Badge = ({ mode }: badgeProps) => {
  const badgeConfig = {
    popular: {
      text: "Popular",
      color: "text-red-500",
      bgColor: "bg-red-100",
      icon: (
        <Image
          src={fire}
          width={20}
          height={20}
          alt="Popular"
          className="w-5 h-5"
        />
      ),
    },
    "new-listing": {
      text: "New Listing",
      color: "text-blue-200",
      bgColor: "bg-blue-100",
      icon: (
        <Image
          src={homeIcon}
          width={20}
          height={20}
          alt="New Listing"
          className="w-5 h-5"
        />
      ),
    },
    discounted: {
      text: "Discounted Price",
      color: "text-green-200",
      bgColor: "bg-green-100",
      icon: (
        <Image
          src={dollars}
          width={20}
          height={20}
          alt="Discounted Price"
          className="w-5 h-5"
        />
      ),
    },
  };

  const { text, color, icon, bgColor } =
    badgeConfig[mode] || badgeConfig.popular;

  return (
    <div
      className={twMerge(
        clsx(
          "flex items-center gap-2 py-2.5 px-6 rounded-full text-base text-white",
          color,
          bgColor
        )
      )}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default Badge;
