import { FC } from "react";
import { IMenu, IMenuItem } from "../typing";
import { MenuItem } from "./MenuItem";
import { useLocal } from "@/utils/use-local";

export const Menu: FC<{ list: IMenuItem[] }> = ({ list }) => {
  const local = useLocal({
    menu_selected: null as string | null,
  });

  const onClick = (e: string) => {
    local.menu_selected = e
    local.render()
  }



  return (
    <div
      className={cx(
        `c-border-t c-pt-8 c-mt-4 c-flex c-flex-col c-px-4 c-space-y-2`
      )}
    >
      {list.map((menu, i) => {
        let is_active = false
        if(local.menu_selected) {
          is_active = local.menu_selected === menu.url
        } else {
          is_active = i === 0
        }
        const { label, url, icon, items } = menu;
        return (
          <div key={i}>
            <MenuItem
              label={label}
              url={url}
              icon={icon}
              className=""
              items={items}
              is_active={is_active}
              onClick={onClick}
            />
          </div>
        );
      })}
    </div>
  );
};
