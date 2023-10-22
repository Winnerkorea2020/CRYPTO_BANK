import MainLinkButton from "@/components/MainLinkButton";
import { mainLinkItem } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-1">
        <div className=" mt-20">
          <h3 className="text-3xl tracking-tighter text-secondary font-righteous text-center w-full">
            CRYPTO BANK
          </h3>
        </div>
        <div className="relative w-full h-44 bg-lime-500 mt-2"></div>
        <div className=" my-2">
          <Link href="/exchange" className="">
            <div className="relative w-full h-20 rounded-lg">
              <Image
                src="/exchange_Point.png"
                fill
                className="aboslute top-0 left-0 w-full object-contain object-center "
              />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-10">
          {mainLinkItem.map((mainLink) => (
            <MainLinkButton
              key={mainLink.id}
              url={mainLink.url}
              img={mainLink.icon}
              title={mainLink.title}
              subtitle={mainLink.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
