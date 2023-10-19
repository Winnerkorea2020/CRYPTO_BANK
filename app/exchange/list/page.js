import BackLinkButton from "@/components/BackLinkButton";
import ExchangeList from "@/components/ExchangeList";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white px-3 border-b">
        <BackLinkButton
          url={"/exchange"}
          title={"전환내역리스트"}
          exchange={false}
        />
        <div className="absolute right-3 top-2 flex justify-end ">
          <select className="py-1.5 text-sm px-3.5 text-center bg-none border hover:border-blue-500 rounded-lg">
            <option className="bg-none">1개월</option>
            <option className="bg-none">3개월</option>
            <option className="bg-none">6개월</option>
            <option className="bg-none">12개월</option>
            <option className="bg-none">전체</option>
          </select>
        </div>
      </div>
      <div className="pt-12">
        <div className="mt-3 grid grid-cols-1 gap-y-2">
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
          <ExchangeList
            title={"PITCOIN"}
            date={"2023-10-10 12:12:20"}
            point={"9,999,999,999"}
            crytopoint={"999,000"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
