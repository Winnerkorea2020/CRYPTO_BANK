import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header url={"/exchange"} title={"PICOIN"} exchangeList={false} />
      <div className="flex-1 pt-12">
        <div className="mt-3 border-t">
          <div>
            <div className="mt-10">
              <div className="bg-secondary text-white flex justify-center items-center py-2.5 h-16 rounded-lg gap-10">
                <div className="text-white ">PONIT</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 46 34"
                    fill="none"
                  >
                    <path
                      d="M28.3333 0V11.3333H0V22.6667H28.3333V34L45.3333 16.83L28.3333 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-white ">PITCOIN</div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="tracking-tighter text-sm font-medium">
              코인 전환 하는 보유 포인트를 입력하세요!
            </p>
          </div>
          <div>
            <div>
              <div className="text-sm tracking-tighter font-medium">
                <span className="text-secondary ">*</span>{" "}
                <span className="">보유포인트</span>
              </div>
              <div className="">
                <input
                  type="text"
                  value={"999,999,999,999,999"}
                  className="py-2.5 pr-10 pl-5 border border-secondary w-full rounded-lg text-end"
                />
                <div className="absolute  top-2.5 right-5 text-secondary ">
                  P
                </div>
              </div>
            </div>
            <div className="inline-flex justify-center w-full py-5">
              <Image src={`/RoundDown.png`} width={50} height={50} />
            </div>
            <div>
              <div className="">
                <p className="text-sm tracking-tighter">전환코인</p>
                <div className="relative">
                  <input
                    type="text"
                    disabled
                    value={"999,999,999,999,999"}
                    className="py-2.5 pr-10 pl-5 border border-secondary w-full rounded-lg text-end"
                  />
                  <div className="absolute  top-2.5 left-5 text-secondary ">
                    <div className="flex justify-start items-center">
                      <Image src={"/D_Coin_icon.png"} width={20} height={20} />
                      <div className="px-2">PITCOIN</div>
                    </div>
                  </div>
                  <div className="absolute  top-2.5 right-5 text-secondary ">
                    C
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-5">
                <p className="text-sm tracking-tighter">전환되는 코인</p>
                <div className="relative border-secondary border-2 p-5 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex justify-start items-center">
                        <Image
                          src={"/D_Coin_icon.png"}
                          width={40}
                          height={40}
                        />
                        <div className=" px-2 ">PitCoin</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-end items-center">
                        <div className=" tracking-tighter text-base">
                          차감수수료(Fee):
                        </div>
                        <div className="text-sm">
                          <span className=" text-red-500 px-  tracking-tighter">
                            -1,000
                          </span>
                          <strong className=" ">C</strong>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="px-3  tracking-tighter">990,000</span>
                        <strong className="">C</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center gap-2">
          <button className="py-2.5 px-3 rounded basis-1/3 text-white bg-black">
            취소
          </button>
          <button className="py-2.5 px-3 rounded basis-2/3 text-white bg-secondary">
            전환신청
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
