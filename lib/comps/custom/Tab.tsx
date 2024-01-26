import { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const Tab: FC<{
  tabs: () => {
    label: string;
    url: string;
    count: string;
    onClick?: () => Promise<void> | void;
  }[];
  active: string;
}> = ({ tabs, active }) => {
  return (
    <div className="c-p-1 c-flex c-flex-1 c-w-full">
      <Tabs defaultValue={active} className="c-flex-1">
        <TabsList className="c-grid c-w-full c-grid-cols-2">
          {tabs().map((e, idx) => {
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
                  <div className="c-bg-blue-500 c-rounded-sm c-px-2 c-text-white">
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
