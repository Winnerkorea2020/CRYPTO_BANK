import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
const ExchangeButton = ({
  CoinTitle,
  CoinSubTitle,
  value,
  valuePercentage,
}) => {
  return (
    <div className="my-2">
      <div className="border p-3 rounded-lg">
        <Link href={`/exchange/exchageitems`} className="flex justify-between">
          <div className="flex justify-start items-center w-full">
            <div className=" h-10 w-10 rounded-full bg-orange-300 flex justify-center items-center">{`P`}</div>
            <div className=" tracking-tighter leading-tight px-3">
              <h4 className="text-base">{CoinTitle}</h4>
              <p className="text-sm">{CoinSubTitle}</p>
            </div>
          </div>
          <div className="text-xs flex justify-end items-center w-full">
            <div className="w-full px-3">
              <p className="text-end">{value}</p>
              <p className="text-end text-green-500">{`+${valuePercentage}`}</p>
            </div>
            <div>
              <LiaAngleRightSolid size={20} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExchangeButton;
