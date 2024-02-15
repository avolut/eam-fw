import { getPathname } from "@/utils/pathname";
import { FC, ReactNode, useState } from "react";
import { icon } from "@/comps/icon";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: icon.home,
    url: "/adm/home",
  },
  {
    title: "Schedule",
    icon: icon.schedule,
    url: "#",
    submenu: [
      {
        title: "Inspection Schedule",
        icon: icon.schedule,
        url: "/adm/insp/schedule",
      },
      {
        title: "Maintenance Schedule",
        icon: icon.schedule,
        url: "/adm/mnt/schedule",
      },
    ],
  },
  {
    title: "Transaction",
    icon: icon.transaction,
    url: "#",
    submenu: [
      {
        title: "Inspection",
        icon: icon.transaction,
        url: "/adm/insp/home",
      },
      {
        title: "Maintenance",
        icon: icon.transaction,
        url: "/adm/wo/list",
      },
    ],
  },
  {
    title: "Master Data",
    icon: icon.master_data,
    url: "#",
    submenu: [
      {
        title: "Asset",
        icon: icon.master_data,
        url: "/master/asset/list",
      },
      {
        title: "Asset Category",
        icon: icon.master_data,
        url: "/master/category/list",
      },
      {
        title: "Asset Location",
        icon: icon.master_data,
        url: "/master/location/list",
      },
      {
        title: "Parameter",
        icon: icon.master_data,
        url: "/master/parameter/list",
      },
      {
        title: "Maintenance Task",
        icon: icon.master_data,
        url: "/master/task/list",
      },
    ],
  },
  {
    title: "Manage User",
    icon: icon.manage_user,
    url: "#",
    submenu: [
      {
        title: "User",
        icon: icon.manage_user,
        url: "/master/user/list",
      },
      {
        title: "Role",
        icon: icon.manage_user,
        url: "/master/role/list",
      },
    ],
  },
  {
    title: "Profile",
    icon: icon.profile,
    url: "/profile",
  },
];

export const MenuItem: FC<{
  title: string;
  icon: any;
  url: string;
  submenu?: any;
  index?: number;
  lv: number;
  openIndex?: number;
  isActive: boolean;
  onClick?: () => void;
}> = ({
  title,
  icon,
  url,
  lv,
  submenu,
  index,
  openIndex,
  isActive,
  onClick,
}) => {
  if (url !== "#") {
    preload(url);
  }
  return (
    <div
      onClick={() => {
        if (url !== "#") {
          navigate(url);
        }
        if (onClick) onClick();
      }}
      className={cx(
        css`
          svg {
            width: 15px;
            height: 15px;
          }
        `,
        "c-flex c-cursor-pointer c-items-center c-text-sm",
        "c-space-x-1 c-transition-all c-p-1 c-border-b hover:c-bg-blue-50",
        isActive
          ? css`
              border-left: 4px solid #387aba;
              background: #ecf4fb;
            `
          : css`
              border-left: 4px solid transparent;
            `
      )}
    >
      <div
        className={cx(
          css`
            padding-left: ${lv * 10}px;
          `
        )}
      ></div>
      <div>{icon}</div>
      <div className="c-flex-1">{title}</div>
      <div
        className={cx(
          css`
            svg {
              width: 12px;
              height: 12px;
            }
          `
        )}
      >
        {!!submenu &&
          submenu.length > 0 &&
          (openIndex !== index ? <ChevronRight /> : <ChevronDown />)}
      </div>
    </div>
  );
};

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(index === openIndex ? undefined : index);
  };

  return (
    <div className={cx("c-flex c-flex-1 c-flex-row")}>
      <div
        className={cx(
          "c-flex c-flex-col",
          css`
            border-right: 1px solid #ececeb;
            min-width: 250px;
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
          {menu.map((data, index) => {
            const { url } = data;

            const isActive = getPathname() === url;

            return (
              <div key={index}>
                <MenuItem
                  {...data}
                  lv={0}
                  openIndex={openIndex}
                  index={index}
                  isActive={isActive}
                  onClick={() => toggleSubmenu(index)}
                />
                <div
                  className={cx(
                    "pl-8",
                    openIndex !== index &&
                      css`
                        display: none;
                      `
                  )}
                >
                  {data?.submenu?.map((subitem, subindex) => {
                    const isActive = getPathname() === subitem.url;

                    if (
                      isActive &&
                      openIndex === undefined &&
                      openIndex !== index
                    ) {
                      setOpenIndex(index);
                    }

                    return (
                      <div key={subindex}>
                        <MenuItem {...subitem} lv={1} isActive={isActive} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="c-flex c-flex-1 c-flex-col">{children}</div>
    </div>
  );
};
