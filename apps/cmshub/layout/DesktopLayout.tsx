import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";
import { TopBarCMSHub } from "@/comps/header/cmshub";
import { SideBarCMSHub } from "@/comps/sidebar/cmshub";

const menus = {
  admin: [
    ["Dashboard", icon.home, "/dashboard"],
    ["Structure", icon.inspect, "/structure"],
    ["Content", icon.qr, "/content"],
  ],
  moderator: [
    ["Dashboard", icon.home, "/dashboard"],
    ["Content", icon.qr, "/content"],
  ],
};

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cx("c-flex c-w-full c-justify-between")}>
      <div
        className={cx(
          "", css`width: 300px;`
        )}
      >
        <SideBarCMSHub />
      </div>
      <div className={cx("c-w-full")}>
        {/* topbar */}
          <TopBarCMSHub />
        {/* topbar */}
        <div>{children}</div>
      </div>
    </div>
  );
};
