import Link from "next/link";
import { LiaAngleLeftSolid } from "react-icons/lia";

const BackLinkButton = ({ url, title, exchange }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-2.5 h-12">
        <div className="tracking-tighter text-sm ">
          <Link
            href={url}
            className="flex items-center justify-start cursor-pointer"
          >
            <LiaAngleLeftSolid />
            <div className="px-2 font-medium">{title}</div>
          </Link>
        </div>
        {!exchange ? null : (
          <Link
            href="/exchange/myexhangelist"
            className="text-xs tracking-tighter"
          >
            <div className="py-1 px-1.5 text-white bg-red-500 rounded">
              전환내역
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BackLinkButton;
