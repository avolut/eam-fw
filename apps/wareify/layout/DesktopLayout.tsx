import { FC, ReactNode } from "react";

export const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cx("c-flex c-flex-1 c-flex-row")}>
      <div
        className={cx(
          "c-flex c-flex-col",
          css`
            border-right: 1px solid #ececeb;
            min-width: 250px;
            padding: 10px;
          `
        )}
      >
        <div className="c-border-l c-p-2">Wareify</div>
      </div>
      <div className="c-flex c-flex-1 c-flex-col">{children}</div>
    </div>
  );
};
