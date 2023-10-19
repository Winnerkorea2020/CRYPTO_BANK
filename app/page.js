import ExchangeDirect from "@/components/ExchangeDirect";
import MainLink from "@/components/MainLink";
import SliderComponets from "@/components/SliderComponents";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex-1 w-full">
        <h2 className="text-center w-full tracking-tighter py-5 my-2">
          CRYPTO BANK
        </h2>
        <div className="">
          <div className="mb-2">
            <SliderComponets />
          </div>
          <div className="mb-2">
            <Link href="exchange">
              <ExchangeDirect />
            </Link>
          </div>
          <MainLink />
        </div>
      </div>
    </main>
  );
}
