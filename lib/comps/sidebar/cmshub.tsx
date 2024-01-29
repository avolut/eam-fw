import { icon } from "@/comps/icon";
import { Input } from "@/comps/ui/input";

export const SideBarCMSHub = () => {
  return (
    <>
      <div className={cx(`c-py-8 c-px-4`)}>{icon.cmshub}</div>
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
          {icon.search}
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
