import { FC, ReactNode } from "react";
import { icon } from "@/comps/icon";
import { TopBarCMSHub } from "../comps/header/cmshub";
import { SideBarCMSHub } from "../comps/sidebar/cmshub";
import { iconCmsHub } from "../comps/icon";

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
  return (
    <div className={cx("c-flex c-w-full c-flex-1 c-justify-between")}>
      <div
        className={cx(
          `c-h-full`,
          css`
            width: 300px;
          `
        )}
      >
        <SideBarCMSHub menu={menuList} session={session} />
      </div>
      <div className={cx("c-w-full")}>
        {/* topbar */}
        <TopBarCMSHub session={session} />
        {/* topbar */}
        <div>{children}</div>
      </div>
    </div>
  );
};
