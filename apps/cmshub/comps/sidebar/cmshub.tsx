import { Input } from "@/comps/ui/input";
import { iconCmsHub } from "../icon";

export const SideBarCMSHub = () => {
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
    </>
  );
};
