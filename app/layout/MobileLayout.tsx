import { getPathname } from "@/utils/pathname";
import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";

const menu = {
  Admin: [
    ["Home", icon.home, "/adm/home"],
    ["Inspection", icon.inspect, "/adm/insp/home"],
    ["Scan QR", icon.qr, "/adm/scan-qr"],
    ["Maintenance", icon.maintenance, "/adm/wo/list"],
    ["Profile", icon.profile, "/profile"],
  ],
  Inspector: [
    ["Home", icon.home, "/insp/home"],
    ["Inspection", icon.inspect, "/adm/insp/home"],
    ["Scan QR", icon.qr, "/adm/scan-qr"],
    ["Profile", icon.profile, "/profile"],
  ],
  Maintenance: [
    ["Home", icon.home, "/mtn/home"],
    ["Scan QR", icon.qr, "/adm/scan-qr"],
    ["Maintenance", icon.maintenance, "/adm/wo/list"],
    ["Profile", icon.profile, "/profile"],
  ],
};

export const MobileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  let active_role = "Admin" as keyof typeof menu;
  if (user && user?.user_role_user_role_id_userTom_user[0]?.m_role?.name) {
    active_role = user?.user_role_user_role_id_userTom_user[0]?.m_role?.name;
  }

  const active_menu = !!user ? menu[active_role] : [];
  preload(active_menu.map(([_, __, url]) => url) as string[]);

  return (
    <div
      className={cx(
        "c-flex c-flex-1 c-flex-col c-select-none c-overflow-hidden c-cursor-pointer"
      )}
    >
      <div className="c-relative c-flex-1 c-overflow-auto">
        <div className="c-absolute c-inset-0">{children}</div>
      </div>
      <div
        className={cx(
          " c-flex-row c-flex c-items-stretch c-justify-center",
          css`
            user-select: none;
            border-top: 1px solid #7b6cb6;
            min-height: 60px;
          `
        )}
      >
        {active_menu.map((data) => {
          const [title, icon, url] = data;
          const is_active = getPathname() === url;
          return (
            <div
              onClick={() => {
                if (typeof url === "string") navigate(url);
              }}
              className={cx(
                "c-flex c-flex-col c-justify-center c-items-center c-px-3 c-flex-1 c-transition-all",
                is_active &&
                  css`
                    background: #f4f3f8 !important;
                  `
              )}
            >
              <div
                className={cx(
                  "c-transition-all ",
                  is_active
                    ? css`
                        padding: 5px;
                        padding-bottom: 7px;
                        border-bottom: 4px solid #f68456;
                        margin-bottom: -8px;
                      `
                    : css`
                        margin-bottom: 3px;
                      `
                )}
              >
                {icon}
              </div>
              <div
                className={cx(
                  "c-text-xs c-whitespace-nowrap c-transition-all  c-px-[2px]",
                  is_active &&
                    css`
                      opacity: 0;
                    `
                )}
              >
                {title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
