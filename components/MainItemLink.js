import Link from "next/link";

import {
  LuWalletCards,
  LuTimerReset,
  LuArrowLeftRight,
  LuUser2,
} from "react-icons/lu";

const MainItemLink = ({ title, subTitle, link, icon, iconSize }) => {
  const Icon = icon;

  return (
    <div className="p-6 border rounded-xl text-red-500 hover:text-gray-50 hover:bg-yellow-400">
      <Link
        href={`/${link}`}
        className="flex flex-col justify-center items-center "
      >
        <div className="mb-3">
          <Icon size={iconSize} />
        </div>
        <div className="text-center tracking-tighter leading-tight">
          <h3 className="">{title}</h3>
          <h3 className="">{subTitle}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MainItemLink;
