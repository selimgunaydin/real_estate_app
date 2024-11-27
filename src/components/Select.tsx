import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import chevronDown from "@/src/assets/icons/chevron-down.svg";

interface SelectProps {
  options: string[];
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, className }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className={twMerge(
          clsx(
            'w-full border border-gray-300 rounded-md p-3 pr-10 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary appearance-none',
            className
          )
        )}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
       <Image src={chevronDown} alt="Chevron Down" width={12} height={12} />
      </div>
    </div>
  );
};

export default Select;
