import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";

const menus = {
  admin: [
    ["Dashboard", icon.home, "/dashboard"],
    ["Structure", icon.inspect, "/structure"],
    ["Content", icon.qr, "/content"]
  ],
  moderator: [
    ["Dashboard", icon.home, "/dashboard"],
    ["Content", icon.qr, "/content"]
  ],
};

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cx("c-flex c-w-full c-justify-between")}>
      <div
        className={cx(
          "c-p-4 c-border",
          css`
            width: 300px;
          `
        )}
      >
        <div>{icon.cmshub}</div>
      </div>
      <div className={cx("c-border c-w-full")}>
        <div>TopBar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
