import { Input } from "@/comps/ui/input";
import { iconCmsHub } from "../icon";
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
    <>
      <div className={cx(`c-py-8 c-px-6`)}>{iconCmsHub.logo}</div>
      <div
        className={cx(
          "c-flex",
          css`
            padding: 10px 20px;
          `
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
        <div>
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
    </>
  );
};
