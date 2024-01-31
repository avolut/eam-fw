import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";
import { TopBarCMSHub } from "../comps/header/cmshub";
import { SideBarCMSHub } from "../comps/sidebar/cmshub";
import { iconCmsHub } from "../comps/icon";
import { useLocal } from "@/utils/use-local";

const session = {
  id: "0662ef48-761d-4fa8-953a-cfb9beed5e66",
  name: "Iwan",
  roles: "admin",
  image: iconCmsHub.profile
};
const menuList = {
  admin: [
    { label: "Dashboard", icon: icon.home, url: "/dashboard" },
    { label: "Structure", icon: icon.workflow, url: "/structure" },
    { label: "Users", icon: icon.user, url: "/users" },
    {
      label: "Article",
      icon: icon.article,
      url: "/article",
      items: [
        {
          label: "Berita Terkini",
          url: "/content/berita-terkini",
        },
        {
          label: "Siaran Pers",
          url: "/content/siaran-pers",
        },
        { label: "Gallery", url: "/content/gallery" },
      ],
    },
  ],
  moderator: [
    { label: "Dashboard", icon: icon.home, url: "/dashboard" },
    {
      label: "Content",
      icon: icon.layout,
      url: "/content",
      items: [
        {
          label: "Berita Terkini",
          url: "/content/berita-terkini",
        },
        {
          label: "Siaran Pers",
          url: "/content/siaran-pers",
        },
        { label: "Gallery", url: "/content/gallery" },
      ],
    },
  ],
};

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const local = useLocal({
    showSideBarMenu: true as boolean
  })

  const onShowSideBarMenu = () => {
    local.showSideBarMenu = !local.showSideBarMenu
    local.render()
  }

  return (
    <div className={cx("c-flex c-w-full c-flex-1 c-justify-between")}>
      <div
        className={cx(
          `c-z-10 c-h-full c-transition-all c-duration-300 c-ease-in-out ${local.showSideBarMenu ? `c-opacity-100 c-delay-100 c-w-1/5 ` : `c-w-0 c-opacity-0 c-delay-0`}`
        )}
      >
        <SideBarCMSHub menu={menuList} session={session} />
      </div>
      <div className={cx(`c-z-20 ${local.showSideBarMenu ? `c-w-4/5` : `c-w-full`}`)}>
        {/* topbar */}
        <TopBarCMSHub session={session} onShowSideBarMenu={onShowSideBarMenu} />
        {/* topbar */}
        <div>{children}</div>
      </div>
    </div>
  );
};
