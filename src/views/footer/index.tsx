import React from "react";
import logo from "../../assets/icons/home.svg";
import phone from "../../assets/icons/phone-black.svg";
import mail from "../../assets/icons/mail-black.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import Image from "next/image";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 pt-[60px] md:pt-[82px] pb-[50px] md:pb-[98px] grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="text-gray-500 flex flex-col items-center md:items-start">
          <Link
            href={"#"}
            className="text-xl font-semibold text-primary flex items-center"
          >
            <span className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white mr-2">
              <Image src={logo} alt="Logo" width={24} height={24} />
            </span>
            Rezilla
          </Link>
          <p className="mt-[30px] md:mt-8 font-medium text-center md:text-start">
            Lorem ipsum has been the industry standard dummy
          </p>
          <div className="mt-[30px] md:mt-[48px] space-y-5 md:space-y-[30px] font-medium flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Image src={phone} alt="Phone" width={20} height={20} />
              <Link href={"tel:+901234567"}>+90123 45 67</Link>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={mail} alt="Phone" width={20} height={20} />
              <Link href={"mailto:mail@gmail.com"}>mail@mail.com</Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold mb-10 text-xl text-dark">Quick Links</h3>
          <ul className="space-y-3 text-gray-500">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/listings"}>Listings</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/become-an-agent"}>Become a Agent</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold mb-10 text-xl text-dark">Discovery</h3>
          <ul className="space-y-3 text-gray-500">
            <li>
              <Link href={"/canada"}>Canada</Link>
            </li>
            <li>
              <Link href={"/united-states"}>United States</Link>
            </li>
            <li>
              <Link href={"/germany"}>Germany</Link>
            </li>
            <li>
              <Link href={"/africa"}>Africa</Link>
            </li>
            <li>
              <Link href={"/india"}>India</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-xl mb-5 md:mb-[21px] text-dark text-center md:text-start max-w-[218px] md:max-w-none">
            Subscribe to our Newsletter!
          </h3>
          <form className="flex items-center relative w-full">
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full h-[60px] py-2 px-4 rounded-[30px] border border-gray-300 focus:outline-none"
            />
            <Button
              label=""
              className="absolute right-1.5 w-[50px] h-[50px] rounded-full bg-primary text-white flex items-center justify-center"
              icon={
                <Image
                  src={arrowRight}
                  className="filter brightness-0 invert"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              }
            />
          </form>
          <div className="mt-10 md:mt-8 flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-[33px] md:mb-[30px] text-dark">Follow Us on</h4>
            <div className="flex space-x-5">
              <a href="#" className="text-primary">
                <Image
                  src={linkedin}
                  alt="Linkedin"
                  className="h-[22px]"
                  width={22}
                  height={22}
                />
              </a>
              <a href="#" className="text-primary">
                <Image
                  src={facebook}
                  alt="Facebook"
                  className="h-[22px]"
                  width={22}
                  height={22}
                />
              </a>
              <a href="#" className="text-primary">
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="h-[22px]"
                  width={22}
                  height={22}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-[#AAA] py-3.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-between items-center">
          <p>© Company – All rights reserved</p>
          <div className="space-x-10 hidden md:block">
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
