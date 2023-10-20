import ExchangeCoin from "@/components/ExchangeCoin";
import Header from "@/components/Header";
import MyPoints from "@/components/MyPoints";
import { ExchangeCoinList } from "@/constant";

import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div className="pt-12">
      <Header url={"/"} title={"코인전환"} exchangeList={true} />
      <div className="mt-5">
        <MyPoints
          value={"99,999,999,999"}
          title={"보유포인트"}
          img={"/My_Point_icon.png"}
          imgSize={25}
        />
      </div>
      <div>
        <div className="mt-3">
          <p className="tracking-tighter text-lg font-medium py-2.5">
            전환하고 싶은 코인을 선택하세요.
          </p>
          <div className="grid grid-cols-1 gap-y-2">
            {ExchangeCoinList.map((value) => (
              <ExchangeCoin
                url={value.url}
                icon={value.icon}
                name={value.name}
                subname={value.subname}
                value={value.value}
                percentage={value.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
