import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ExchangeCoin = ({ url, icon, name, subname, value, percentage }) => {
  return (
    <div>
      <Link href={url}>
        <div className="flex justify-between items-center border-2 border-secondary px-5 py-3 rounded-lg w-full">
          <div className="flex items-center justify-start">
            <Image src={icon} width={25} height={25} />
            <div className="px-2 text-base tracking-tighter font-medium">
              <div className="px-2 text-base tracking-tighter font-medium">
                {name}
              </div>
              <div className="px-2 text-base tracking-tighter font-medium text-gray-500">
                {subname}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="px-5">
              <div className="text-end text-lg font-medium">{value}</div>
              <div className="text-end text-lg text-green-500 font-semibold pl-2">
                {percentage}
              </div>
            </div>
            <IoIosArrowForward size={25} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExchangeCoin;
