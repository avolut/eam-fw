import { FC } from "react";
import { ISession } from "../../typing";
import { icon } from "@/comps/icon";

export const DrawerMenu: FC<{
  session: ISession;
  onShowDrawer: () => void;
}> = ({ session, onShowDrawer }) => {
  return (
    <div
      className={cx(
        `z-10 w-full c-h-screen c-flex c-flex-col c-justify-between`
      )}
    >
      <div
        className={cx(`c-px-4 c-py-3 c-flex c-justify-between c-items-center c-border-b`)}
      >
        <div className={cx(`c-flex c-items-center c-space-x-2`)}>
          <div>{session.image}</div>
          <div className={cx(`c-flex c-flex-col c-leading-4`)}>
            <div>{session.name}</div>
            <div className={cx(`c-capitalize c-text-xs`)}>{session.roles}</div>
          </div>
        </div>
        <div onClick={onShowDrawer}>{icon.close}</div>
      </div>
      <div className={cx(`c-px-4 c-py-4 c-h-full`)}>Content</div>
      <div className={cx(`c-px-4 c-py-4 c-border-t`)}>Bottom</div>
    </div>
  );
};
