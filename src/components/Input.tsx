import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, type = "text", value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={twMerge(clsx('w-full border border-gray-300 rounded-md p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary'), className)}
    />
  );
};

export default Input;
