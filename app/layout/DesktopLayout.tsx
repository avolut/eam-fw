import { getPathname } from "@/utils/pathname";
import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import { icon } from "@/comps/icon";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useLocal } from "@/utils/use-local";

type IMenu = [string, ReactNode, string | IMenu[]];

const menu: Record<string, IMenu[]> = {
  Operator: [],
  Picker: [],
  Admin: [
    ["Dashboard", icon.home, "/adm/home"],
    ["Asset", icon.master_data, "/master/asset/list/_#master"],
    [
      "Inspection",
      icon.inspect,
      [
        ["Inspection Schedule", null, "/adm/insp/schedule"],
        [
          "Inspection Result",
          null,
          [
            ["Reported", null, "/adm/insp/home#0"],
            ["Good", null, "/adm/insp/home#1"],
            ["Caution", null, "/adm/insp/home#2"],
            ["Urgent", null, "/adm/insp/home#3"],
          ],
        ],
      ],
    ],
    [
      "Maintenance",
      icon.maintenance,
      [
        ["Preventive Schedule", null, "/adm/mnt/schedule/list"],
        [
          "Work Order",
          null,
          [
            ["Draft", null, "/adm/wo/list#0"],
            ["Issued", null, "/adm/wo/list#1"],
            ["In Progress", null, "/adm/wo/list#2"],
            ["Done", null, "/adm/wo/list#3"],
          ],
        ],
        ["Approval Rule", null, "/master/wo-rule/list"],
      ],
    ],
    ["Profile", icon.profile, "/profile"],
  ],
  Inspector: [
    ["Dashboard", icon.home, "/insp/home"],
    ["Inspection Schedule", icon.schedule, "/adm/insp/schedule"],
    [
      "Inspection Result",
      icon.inspect,
      [
        ["Reported", null, "/adm/insp/home#0"],
        ["Good", null, "/adm/insp/home#1"],
        ["Caution", null, "/adm/insp/home#2"],
        ["Urgent", null, "/adm/insp/home#3"],
      ],
    ],
    ["Profile", icon.profile, "/profile"],
  ],
  Maintenance: [
    ["Dashboard", icon.home, "/mtn/home"],
    ["Preventive Schedule", icon.maintenance, "/adm/mnt/schedule/list"],
    [
      "Work Order",
      icon.note,
      [
        ["Draft", null, "/adm/wo/list#0"],
        ["Issued", null, "/adm/wo/list#1"],
        ["In Progress", null, "/adm/wo/list#2"],
        ["Done", null, "/adm/wo/list#3"],
      ],
    ],
    ["Approval Rule", icon.schedule, "/master/wo-rule/list"],
    ["Profile", icon.profile, "/profile"],
  ],
  Staff: [
    ["Dashboard", icon.home, "/staff/home"],
    ["Reported Issue", icon.master_data, "/staff/reported-issue/list"],
    ["History", icon.inspect, "/staff/history/list"],
    ["Profile", icon.profile, "/profile"],
  ],
};

export const DesktopLayout: FC<{ children: ReactElement }> = ({ children }) => {
  const local = useLocal({
    size:
      parseInt(localStorage.getItem("app-desktop-sidebar-size") || "") || 18,
  });
  return (
    <PanelGroup direction="horizontal">
      <>
        <Panel
          id="sidebar"
          minSize={15}
          defaultSize={local.size}
          order={1}
          className={cx("c-border-r c-flex c-flex-col c-items-stretch")}
          onResize={(size) => {
            local.size = size;
            local.render();
            localStorage.setItem("app-desktop-sidebar-size", size.toString());
          }}
        >
          <Logo />
          <SideBar />
        </Panel>
        <PanelResizeHandle />
      </>
      <Panel order={2}>{children}</Panel>
    </PanelGroup>
  );
};

const SideBar = () => {
  const local = useLocal({
    open: new Set<IMenu>(),
  });
  const user = JSON.parse(localStorage.getItem("user") || "null");
  let active_role = "Admin" as keyof typeof menu;
  if (user && user?.user_role_user_role_id_userTom_user[0]?.m_role?.name) {
    active_role = user?.user_role_user_role_id_userTom_user[0]?.m_role?.name;
  }
  const active_menu = !!user ? menu[active_role] : [];

  return (
    <div className="c-flex c-flex-col c-flex-1 c-relative c-overflow-auto">
      {active_menu.map((item, key) => {
        return (
          <Menu
            key={key}
            item={item}
            open={local.open}
            render={local.render}
            on_open={() => {
              if (!local.open.has(item)) {
                local.open.add(item);
              }

              setTimeout(() => {
                local.render();
              });
            }}
          />
        );
      })}
    </div>
  );
};

const Menu: FC<{
  item: IMenu;
  lv?: number;
  open: Set<IMenu>;
  render: () => void;
  on_open: () => void;
}> = ({ item, lv, open, render, on_open }) => {
  const [label, icon, link] = item;
  if (typeof link === "string") {
    preload(link);
  }

  const is_active = getPathname() === link;
  const has_child = Array.isArray(link);
  useEffect(() => {
    if (is_active) {
      open.add(item);
      on_open();
    }
  }, [is_active]);

  return (
    <>
      <div
        className={cx(
          "c-flex c-cursor-pointer c-items-center c-text-sm",
          "c-space-x-1 c-transition-all c-p-1 c-border-b hover:c-bg-blue-50",
          css`
            svg {
              width: 15px;
              height: 15px;
            }
          `,
          is_active
            ? css`
                border-left: 4px solid #387aba;
                background: #ecf4fb;
              `
            : css`
                border-left: 4px solid transparent;
              `
        )}
        onClick={() => {
          if (typeof link === "string") {
            navigate(link);
          } else if (has_child) {
            if (open.has(item)) {
              open.delete(item);
            } else {
              open.add(item);
            }
            render();
          }
        }}
      >
        <div
          className={cx(
            css`
              padding-left: ${(lv || 0) * 10}px;
            `
          )}
        ></div>
        <div>{icon}</div>
        <div className="c-flex-1">{label}</div>
        {has_child && (
          <>{open.has(item) ? <ChevronDown /> : <ChevronRight />}</>
        )}
      </div>
      <div className={cx("c-flex c-flex-col", !open.has(item) && "c-hidden")}>
        {has_child &&
          link.map((item, key) => {
            return (
              <Menu
                key={key}
                lv={(lv || 0) + 1}
                item={item}
                open={open}
                render={render}
                on_open={() => {
                  if (!open.has(item)) {
                    open.add(item);
                  }
                  on_open();
                }}
              />
            );
          })}
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <div
      className={cx(
        "c-flex c-flex-col",
        css`
          margin-top: 20px;
        `
      )}
    >
      <div
        className={cx(
          "c-flex c-items-center",
          css`
            border-left: 4px solid black;
            padding-left: 10px;
            margin-bottom: 20px;
            font-size: 20px;
          `
        )}
      >
        <span className="c-font-bold c-pr-1 ">Wareify </span>
        <span
          className={cx(
            "c-mr-1 c-border-r-2 c-border-r-slate-400",
            css`
              height: 20px;
            `
          )}
        ></span>
        <span className="c-font-bold c-text-orange-400">EAM</span>
      </div>
    </div>
  );
};
