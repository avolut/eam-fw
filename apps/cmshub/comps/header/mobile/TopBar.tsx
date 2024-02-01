import { FC } from "react";
import { icon } from "@/comps/icon";
import { ISession } from "../../typing";
import { ProfileHeader } from "../Profile";

export const TopBarMobile: FC<{
  session: ISession;
  onShowDrawer: () => void;
}> = ({ session, onShowDrawer }) => {
  return (
    <div
      className={cx(
        `c-flex c-justify-between c-px-2 c-py-3 c-items-center c-space-x-2 c-relative`
      )}
    >
      <div className={cx(`c-cursor-pointer`)} onClick={() => onShowDrawer()}>
        {icon.menu}
      </div>
      <div className={cx(`c-w-full c-capitalize`)}>Hi {session.name}</div>
      <div className={cx(`c-flex c-items-center c-space-x-2`)}>
        {/* <div>{icon.bellSmall}</div> */}
        <ProfileHeader session={session} />
      </div>
    </div>
  );
};
