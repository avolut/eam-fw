import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";
import { Input } from "@/comps/ui/input";

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
          "",
          css`
            width: 300px;
          `
        )}
      >
        <div
          className={cx(
            "",
            css`
              padding: 30px 30px 10px;
            `
          )}
        >
          {icon.cmshub}
        </div>
        <div
          className={cx(
            "c-flex",
            css`
              padding: 10px 20px;
            `
          )}
        >
          <div
            className={cx(
              "c-flex c-justify-center c-items-center",
              css`
                background-color: #f5f8fa;
                padding-left: 10px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              `
            )}
          >
            {icon.search}
          </div>
          <div>
            <Input
              className={cx(
                "",
                css`
                  background-color: #f5f8fa;
                  border: none;
                  outline: none;
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
                `
              )}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className={cx("c-w-full")}>
        <div>TopBar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
