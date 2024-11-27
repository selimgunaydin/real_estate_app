import React from "react";
import pin from "../../assets/icons/pin.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import Image from "next/image";
import Link from "next/link";

function Band() {
  return (
    <div className="bg-primary hidden lg:flex">
      <div className="mx-[100px] w-full">
        <div className="flex items-center justify-between gap-2 py-3">
          <div className="flex gap-2">
            <Image src={pin} alt="Pin" width={12} height={12} />
            <p className="text-white text-sm">
              Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5">
              <Image src={phone} alt="Phone" width={12} height={12} />
              <Link href={"tel:+901234567"} className="text-white text-sm">
                +90123 45 67
              </Link>
            </div>
            <div className="flex items-center gap-[7px]">
              <Image src={mail} alt="Mail" width={12} height={12} />
              <Link
                href={"mailto:mail@mail.com"}
                className="text-white text-sm"
              >
                mail@mail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Band;
