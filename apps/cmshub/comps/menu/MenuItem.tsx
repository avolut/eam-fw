import { FC, ReactElement } from "react";
import { IMenuItem } from "../typing";
import { icon as defaultIcon } from "@/comps/icon";

export const MenuItem: FC<{
  icon?: ReactElement;
  label: string;
  is_active?: boolean;
  url: string;
  items?: IMenuItem[];
  className: string;
  onClick: (e: string) => void;
}> = ({ icon, label, is_active = false, url, items, className, onClick }) => {
  return (
    <div
      className={cx(
        ...className,
        `c-flex c-px-4 c-py-1 c-items-center c-cursor-pointer c-rounded-lg c-justify-between c-w-full ${
          is_active ? `c-bg-[#F9F9F9]` : `c-text-gray-400`
        }`
      )}
      onClick={() => {
        if(typeof onClick === 'function') onClick(url)
      }}
    >
      <div className={cx(`c-flex c-space-x-2`)}>
        <div>{icon}</div>
        <div className={cx(`c-text-lg`)}>{label}</div>
      </div>
      {items && <div>{defaultIcon.right}</div>}
    </div>
  );
};
