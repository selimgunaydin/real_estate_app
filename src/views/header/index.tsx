"use client";

import React, { useRef, useState } from "react";
import Band from "./band";
import logo from "../../assets/icons/home.svg";
import user from "../../assets/icons/user.svg";
import menuIcon from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import Image from "next/image";
import Link from "next/link";
import { useOnClickOutside } from "@/src/hooks/use-on-click-outside";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-col relative bg-white w-full">
      <Band />
      <nav className="lg:mx-[100px] max-md:container">
        <div className="grid grid-cols-12 w-full justify-between">
          <div className="col-span-7 flex justify-between py-[21px]">
            <ul className="hidden md:flex text-gray-500 font-medium">
              <li className="px-4 py-[13px] bg-[#4361EE4D] rounded-[30px]">
                <Link href={"#"} className="hover:text-black">
                  Home
                </Link>
              </li>
              <li className="px-4 py-[13px]">
                <Link href={"#"} className="hover:text-black">
                  About
                </Link>
              </li>
              <li className="px-4 py-[13px]">
                <Link href={"#"} className="hover:text-black">
                  Listings
                </Link>
              </li>
              <li className="px-4 py-[13px]">
                <Link href={"#"} className="hover:text-black">
                  Services
                </Link>
              </li>
              <li className="px-4 py-[13px]">
                <Link href={"#"} className="hover:text-black">
                  Blogs
                </Link>
              </li>
            </ul>

            <Link href={"#"} className="flex items-center gap-2 ">
              <div className="bg-primary rounded-full p-[13px]">
                <Image src={logo} alt="Logo" width={24} height={24} />
              </div>
              <span className="font-semibold text-xl leading-5">Logo</span>
            </Link>
          </div>

          <div className="col-span-5 hidden md:flex justify-end items-center gap-5">
            <Link
              href={"#"}
              className="flex gap-2.5 items-center font-medium text-base text-gray-500"
            >
              <Image src={user} alt="Logo" width={18} height={18} />
              <span>Login/Register</span>
            </Link>
            <Link
              href={"#"}
              className="bg-primary hover:bg-primary-800 duration-300 rounded-[50px] flex gap-2 text-white text-base font-medium items-center py-[15px] px-[26px]"
            >
              <Image src={logo} alt="Logo" width={20} height={20} />
              <span>Add Listing</span>
            </Link>
          </div>
          <div className="col-span-5 flex justify-end md:hidden">
            <button onClick={toggleMenu}>
              <Image src={menuIcon} alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50 md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-4 p-4 bg-gray-200 rounded-full"
          >
            <Image src={close} alt="Close Menu" width={16} height={16} />
          </button>
          <ul className="mt-16 flex flex-col items-start p-4 space-y-4">
            <li>
              <Link href="#" className="text-gray-800 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-black">
                Listings
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 hover:text-black">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
