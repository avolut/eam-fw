import { Input } from "@/comps/ui/input";
import { iconCmsHub } from "../icon";
import { icon } from "@/comps/icon";
import { IMenu, ISession } from "../typing";
import { useLocal } from "@/utils/use-local";
import { Menu } from "../menu/Menu";

export const SideBarCMSHub = ({
  menu,
  session,
}: {
  menu: IMenu;
  session: ISession;
}) => {
  const local = useLocal({
    status: "init" as "init" | "loading" | "ready",
    showBottomMenu: false as boolean
  });

  const menuBottom = [
    { label: "Notifications", icon: icon.bell, url: "/notification" },
    { label: "Settings", icon: icon.setting, url: "/setting" },
  ]

  const onShowButtomMenu = () => {
    local.showBottomMenu = !local.showBottomMenu
    local.render()
  }

  return (
    <div
      className={cx(`c-flex c-flex-col c-justify-between c-h-full c-border-r`)}
    >
      <div>
        <div className={cx(`c-py-8 c-px-6`)}>{iconCmsHub.logo}</div>
        <div className={cx(`c-flex c-px-4`)}>
          <div
            className={cx(
              `c-flex c-justify-center c-items-center c-pl-2 c-bg-[#f5f8fa] c-rounded-tl-lg c-rounded-bl-lg`
            )}
          >
            {iconCmsHub.search}
          </div>
          <div className={cx(`c-w-full`)}>
            <Input
              className={cx(
                `c-bg-[#f5f8fa] c-border-none c-outline-none c-rounded-tl-none c-rounded-bl-none`
              )}
              placeholder="Search"
            />
          </div>
        </div>
        <div className={cx(``)}>
          <Menu list={menu[session.roles]} />
        </div>
      </div>
      <div className={cx(``)}>
        <div className={cx(`c-pb-2 c-transition-all c-duration-300 c-ease-in-out ${local.showBottomMenu ? `c-opacity-100 c-delay-100` : `c-opacity-0 c-delay-0`}`)}>
          <Menu list={menuBottom} />
        </div>
        <div className={cx(`c-bg-gray-100 c-flex c-justify-between c-items-center c-px-4 c-py-2`)}>
          <div className={cx(`c-flex c-space-x-2 c-font-bold c-items-center`)}>
            <div>{session.image}</div>
            <div className={cx(`c-capitalize`)}>{session.roles}</div>
          </div>
          <div className={cx(`c-cursor-pointer`)} onClick={onShowButtomMenu}>. . .</div>
        </div>
      </div>
    </div>
  );
};
