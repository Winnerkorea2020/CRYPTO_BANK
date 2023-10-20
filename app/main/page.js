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
        <div className="mt-10">
          <div className="relative w-full h-64 bg-lime-500 mt-2"></div>
          <Link href="/exchange">
            <div className="relative w-full h-40 rounded-lg">
              <Image
                src="/exchange_Point.png"
                fill
                className="aboslute top-0 left-0 w-full object-contain object-center "
              />
            </div>
          </Link>
        </div>
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
  );
};

export default page;
