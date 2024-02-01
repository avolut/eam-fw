import { useLocal } from "@/utils/use-local";
import { FC, ReactNode } from "react";
import { TopBarDesktop } from "../comps/header/desktop/TopBar";
import { iconCmsHub } from "../comps/icon";
import { SideBarCMSHub } from "../comps/sidebar/cmshub";
import menu from "./menu";

const session = {
  id: "0662ef48-761d-4fa8-953a-cfb9beed5e66",
  name: "Iwan",
  roles: "moderator",
  image: iconCmsHub.profile,
};

const menuList = menu;

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const local = useLocal({
    showSideBarMenu: true as boolean,
  });

  const onShowSideBarMenu = () => {
    local.showSideBarMenu = !local.showSideBarMenu;
    local.render();
  };

  return (
    <div className={cx("c-flex c-w-full c-flex-1 c-justify-between c-overflow-hidden")}>
      <div
        className={cx(
          `c-z-10 c-h-full c-transition-all c-duration-300 c-ease-in-out ${
            local.showSideBarMenu
              ? `c-opacity-100 c-delay-100 c-min-w-[300px] c-w-1/5 `
              : `c-w-0 c-opacity-0 c-delay-0`
          }`
        )}
      >
        <SideBarCMSHub menu={menuList} session={session} />
      </div>
      <div
        className={cx(
          `c-z-20 ${local.showSideBarMenu ? `c-w-4/5` : `c-w-full`}`
        )}
      >
        {/* topbar */}
        <TopBarDesktop session={session} onShowSideBarMenu={onShowSideBarMenu} />
        {/* topbar */}
        <div>{children}</div>
      </div>
    </div>
  );
};
