import { LiaArrowRightSolid } from "react-icons/lia";

const ExchangeList = ({ title, date, point, crytopoint }) => {
  return (
    <div className="my-2">
      <div className="text-xs">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-2">
            <div className="h-10 w-10 rounded-full bg-green-600"></div>
            <div className="text-xs tracking-tighter ">
              <div className="font-medium ">{title}</div>
              <div className="text-[10px]">{date}</div>
            </div>
          </div>
          <div className="tracking-tighter">
            <div className="inline-block px-2 ">
              {point}
              <span>P</span>
            </div>
            <div className="inline-block">
              <LiaArrowRightSolid size={10} />
            </div>
            <div className="inline-block px-2">
              {crytopoint} <span>C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeList;
