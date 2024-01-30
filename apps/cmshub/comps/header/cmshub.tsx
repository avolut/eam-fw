import { icon } from "../../../../lib/comps/icon";
import { iconCmsHub } from "../icon";

export const TopBarCMSHub = () => {
  return (
    <div className={cx("c-bg-[#f5f8fa]")}>
      <div className={cx(`c-flex c-w-full c-border-t c-border-b`)}>
        <div className={cx(`c-cursor-pointer c-px-6 c-py-6`)}>
          {iconCmsHub.collapseMenu}
        </div>
        <div className={cx(`c-flex c-flex-1 c-justify-between c-items-center c-border-l c-px-4`, css``)}>
            <div className={cx(`c-flex c-items-center c-space-x-2`, css``)}>
                <div className={cx(`c-text-2xl`, css``)}>Structure</div>
                <div className={cx(`c-text-[#5E5ADB] c-font-bold c-text-base  rounded-full c-bg-[#eaeaf6] c-px-2 c-py-1`, css``)}>27</div>
            </div>
            <div className={cx(`c-flex c-space-x-4 c-items-center`, css``)}>
                <div className={cx(`c-cursor-pointer c-text-gray-400`)}>{icon.bell}</div>
                <div className={cx(`c-cursor-pointer c-text-gray-400`)}>{icon.help}</div>
                <div className={cx(`c-cursor-pointer`)}>{iconCmsHub.profile}</div>
            </div>
        </div>
      </div>
    </div>
  );
};
