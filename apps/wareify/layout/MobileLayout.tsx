import { getPathname } from "@/utils/pathname";
import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";

const menu = {
  admin: [
    ["Home", icon.home, "/adm/home"],
    ["Inspection", icon.inspect, "/adm/insp/home"],
    ["Scan QR", icon.qr, "/adm/scan-qr"],
    ["Maintenance", icon.maintenance, "/adm/wo/list"],
    ["Profile", icon.profile, "/profile"],
  ],
};

export const MobileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const active_menu = menu["admin"];

  preload(active_menu.map(([_, __, url]) => url) as string[]);

  return (
    <div className={cx("c-flex c-flex-1 c-flex-col c-select-none")}>
      <div className="c-relative c-flex-1 c-overflow-auto">
        <div className="c-absolute c-inset-0">{children}</div>
      </div>
      <div className="c-min-h-[70px] c-border-t c-flex-row c-flex c-items-stretch c-justify-center">
        {active_menu.map((data) => {
          const [title, icon, url] = data;
          const is_active = getPathname() === url;
          return (
            <div
              onClick={() => {
                if (typeof url === "string") navigate(url);
              }}
              className={cx(
                "c-flex c-flex-col c-justify-center c-items-center c-px-3 c-border-t-2 c-flex-1",
                is_active
                  ? "c-bg-blue-50 c-border-t-blue-600"
                  : "c-border-t-transparent"
              )}
            >
              <div>{icon}</div>
              <div className="c-text-xs c-mt-1">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
