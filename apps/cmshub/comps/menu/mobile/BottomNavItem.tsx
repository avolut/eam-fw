import { FC, ReactElement } from "react";

export const BottomNavItem: FC<{
  label: string;
  icon?: ReactElement;
  url: string;
  is_active: boolean;
  onClick: (e: string) => void;
}> = ({ label, icon, url, is_active, onClick }) => {
  return (
    <div
      className={cx(
        `c-flex c-flex-col c-items-center c-justify-center c-py-1.5 c-cursor-pointer ${
          is_active ? `c-text-gray-800` : `c-text-gray-400`
        }`
      )}
      onClick={() => {
        if (typeof onClick === "function") onClick(url);
      }}
    >
      <div className={cx(``)}>{icon}</div>
      <div className={cx(`c-text-xs ${is_active ? `c-font-bold` : ``}`)}>
        {label}
      </div>
    </div>
  );
};
