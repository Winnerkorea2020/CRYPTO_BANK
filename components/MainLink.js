import React from "react";
import MainItemLink from "./MainItemLink";

import {
  LuWalletCards,
  LuTimerReset,
  LuArrowLeftRight,
  LuUser2,
} from "react-icons/lu";

const mainLink = [
  {
    id: "1",
    icon: LuWalletCards,
    title: "코인지갑",
    subtitle: "Wallet",
    link: "coin",
  },
  {
    id: "2",
    icon: LuTimerReset,
    title: "스테이킹",
    subtitle: "Staking",
    link: "stakin",
  },
  {
    id: "3",
    icon: LuArrowLeftRight,
    title: "P2P거래소",
    subtitle: "exchange",
    link: "exchange",
  },
  {
    id: "4",
    icon: LuUser2,
    title: "MY설정",
    subtitle: "Setting",
    link: "setting",
  },
];

const MainLink = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {mainLink.map((mainLink, index) => (
        <MainItemLink
          key={index}
          icon={mainLink.icon}
          iconSize={50}
          title={mainLink.title}
          subTitle={mainLink.subtitle}
          link={mainLink.link}
        />
      ))}
    </div>
  );
};

export default MainLink;
