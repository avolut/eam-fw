import { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useLocal } from "@/utils/use-local";

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
  const local = useLocal({ active });
  const all_tabs = tabs();
  return (
    <div className="c-p-1 c-flex c-flex-1 c-w-full">
      <Tabs value={local.active} className="c-flex-1">
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
                  local.active = idx.toString();
                  local.render();
                  if (e.url) {
                    navigate(e.url);
                  }
                }}
                className={cx(
                  css`
                    padding: 0px !important;
                    margin: 0px 0px 0px ${idx === 0 ? 0 : 5}px;
                    border-bottom-right-radius: 0px;
                    border-bottom-left-radius: 0px;
                  `
                )}
              >
                <div
                  className={cx(
                    " c-flex-1 c-p-1",
                    e.count ? "c-flex c-justify-between" : "",
                    local.active === idx.toString()
                      ? css`
                          border-bottom: 2px solid
                            ${e.color ? e.color : "#3c82f6"};
                        `
                      : "border-b-transparent"
                  )}
                >
                  <div className="mr-1">{e.label}</div>
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
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};
