import { getPathname } from "@/utils/pathname";
import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";

const menu = {
  admin: [
    ["Dashboard", icon.home, "/adm/home"],
    ["Reports", icon.inspect, "#"],
    ["Schedule", icon.schedule, "#"],
    ["Transaction", icon.transaction, "#"],
    ["Master Data", icon.master_data, "#"],
    ["Manage User", icon.manage_user, "#"],
    ["Notification", icon.notification, "/notification"],
    ["Profile", icon.profile, "/profile"],
  ],
};

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const active_menu = menu["admin"];

  preload(active_menu.map(([_, __, url]) => url) as string[]);

  return (
    <div className={cx("c-flex c-flex-1 c-flex-row")}>
      <div
        className={cx(
          "c-flex c-flex-col",
          css`
            border-right: 1px solid #ececeb;
            min-width: 250px;
            padding: 10px;
          `
        )}
      >
        <div
          className={cx(
            css`
              border-left: 4px solid black;
              padding-left: 10px;
              margin-bottom: 20px;
              font-size: 20px;
              font-weight: bold;
            `
          )}
        >
          Wareify
        </div>
        <div className="c-flex c-flex-col c-justify-between">
          {active_menu.map((data, index) => {
            const [title, icon, url] = data;

            const is_active = getPathname() === url;

            return (
              <div
                key={index}
                onClick={() => {
                  if (typeof url === "string") navigate(url);
                }}
                className={cx(
                  css`
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  `,
                  "c-flex c-flex-col c-justify-center c-cursor-pointer c-ml-3 c-border-l-2 c-mt-2",
                  is_active
                    ? "c-bg-blue-50 c-border-t-blue-600"
                    : "c-border-t-transparent"
                )}
              >
                <div className="c-flex c-w-full c-space-x-2 c-bg-red-900 c-items-center ">
                  <div
                    className={cx(
                      css`
                        margin-right: 10px;
                      `
                    )}
                  >
                    {icon}
                  </div>
                  <div className="c-mt-1 c-ml-3">{title}</div>
                </div>
              </div>
            );
          })}

          <div
            onClick={() => {}}
            className={cx(
              css`
                border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
              `,
              "c-flex c-flex-col c-justify-center c-cursor-pointer c-ml-3 c-border-l-2 c-mt-2"
            )}
          >
            <div className="c-flex c-w-full c-space-x-2 c-bg-red-900 c-items-center ">
              <div
                className={cx(
                  css`
                    margin-right: 10px;
                  `
                )}
              >
                icon
              </div>
              <div className="c-mt-1 c-ml-3">title</div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-flex c-flex-1 c-flex-col">{children}</div>
    </div>
  );
};
