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
  });

  return (
    <div className={cx(`c-flex c-flex-col c-justify-between c-h-full c-border-r`)}>
      <div>
        <div className={cx(`c-py-8 c-px-6`)}>{iconCmsHub.logo}</div>
        <div
          className={cx(
            `c-flex c-px-4`
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
            {iconCmsHub.search}
          </div>
          <div className={cx(`c-w-full`)}>
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
        <div className={cx(``)}>
          <Menu list={menu[session.roles]} />
        </div>
      </div>
      <div className={cx(`c-bg-gray-100 c-py-2`)}>
        <div className={cx(`c-flex c-justify-between c-items-center c-px-4`)}>
          <div className={cx(`c-flex c-space-x-2 c-font-bold c-items-center`)}>
            <div>{session.image}</div>
            <div className={cx(`c-capitalize`)}>{session.roles}</div>
          </div>
          <div className={cx(``)}>. . .</div>
        </div>
      </div>
    </div>
  );
};
