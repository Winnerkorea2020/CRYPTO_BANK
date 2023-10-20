import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Header = ({ url, title, exchangeList }) => {
  return (
    <div className="fixed top-0 left-0 container mx-auto w-full z-50 bg-white h-12 py-2.5">
      <div className="h-12 flex justify-between items-center px-5">
        <div className="flex justify-start items-center">
          <Link href={url} className="">
            <IoIosArrowBack size={20} />
          </Link>
          <div className="text-lg px-2 tracking-tighter font-medium">
            {title}
          </div>
        </div>
        <div>
          {!exchangeList ? null : (
            <div>
              <Link
                href={`/exchange/list`}
                className="text-base bg-secondary text-white py-2 px-3 rounded"
              >
                전환내역
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
