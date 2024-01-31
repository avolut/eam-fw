import { FC, ReactNode } from "react";
import { BottomNav } from "../comps/menu/mobile/BottomNav";
import { icon } from "@/comps/icon";

const bottomMenuList = [
  { label: "Dashboard", icon: icon.dashboardSmall, url: '/dashboard' },
  { label: "Notification", icon: icon.bellSmall, url: '/notification' },
  { label: "Setting", icon: icon.settingSmall, url: '/setting' },
  { label: "Profile", icon: icon.userSmall, url: '/profile' },
];

export const MobileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cx(`c-flex c-flex-1 c-flex-col`)}>
      <div className={cx(`c-flex c-flex-1 c-w-full c-bg-gray-100`)}>{children}</div>
      <div className={cx(``)}>
        <BottomNav menu={bottomMenuList} />
      </div>
    </div>
  );
};
