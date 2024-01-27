import { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const Tab: FC<{
  tabs: () => {
    label: string;
    url: string;
    count: string;
    color?: string;
    onClick?: () => Promise<void> | void;
  }[];
  active: string;
}> = ({ tabs, active }) => {
  const all_tabs = tabs();
  return (
    <div className="c-p-1 c-flex c-flex-1 c-w-full">
      <Tabs defaultValue={active} className="c-flex-1">
        <TabsList
          className={cx(
            "c-grid c-w-full ",
            css`
              grid-template-columns: repeat(${all_tabs.length}, minmax(0, 1fr));
            `
          )}
        >
          {all_tabs.map((e, idx) => {
            return (
              <TabsTrigger
                value={idx + ""}
                onClick={() => {
                  if (e.url) {
                    navigate(e.url);
                  }
                }}
                className={cx(e.count ? "c-flex c-justify-between" : "")}
              >
                <div>{e.label}</div>
                {e.count && (
                  <div
                    className={cx(
                      "c-rounded-sm c-px-2 c-text-white",
                      e.color
                        ? css`
                            background-color: ${e.color};
                          `
                        : `c-bg-blue-500`
                    )}
                  >
                    {e.count}
                  </div>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};
