import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", icon, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(clsx("w-full bg-primary text-white py-5 flex items-center justify-center space-x-2.5 pl-1.5 hover:bg-primary-800 transition duration-300 rounded-[50px] text-base", className))}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
