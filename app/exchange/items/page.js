import BackLinkButton from "@/components/BackLinkButton";
import React from "react";
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";

const page = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white px-3 border-b">
        <BackLinkButton url={"/exchange"} title={"PITCOIN"} exchange={false} />
      </div>
      <div className="pt-12 flex flex-col justify-between min-h-screen">
        <div className="flex-1">
          <div className="mt-3">
            <div className="flex justify-center items-center gap-10 bg-orange-500 text-white font-semibold py-2.5 rounded">
              <div>POINT</div>
              <div>
                <LiaArrowAltCircleRightSolid size={30} />
              </div>
              <div>PITCOIN</div>
            </div>
            <p className="text-xs tracking-tighter my-2.5">
              코인으로 전환 하는 보유 포인트를 입력하세요!
            </p>
          </div>
          <div>
            <div>보유포인트</div>
            <div className="relative">
              <input
                className="border border-orange-300 w-full py-2.5 rounded-lg pr-16 text-end"
                type="number"
                min={0}
              />
              <div className="absolute top-2.5 right-5 text-orange-500 font-semibold">
                P
              </div>
            </div>
          </div>
        </div>
        <div>aaaa</div>
      </div>
    </div>
  );
};

export default page;
