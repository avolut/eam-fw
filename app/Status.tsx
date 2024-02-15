import { FC } from "react";

const colors = {
  inspection_result: {
    good: "green",
    caution: "orange",
    urgent: "red",
  },
  wo_status: {
    completed: "green",
    "in progress": "orange",
    issued: "blue",
    draft: "gray",
  },
  wor_status: {
    "not started": "blue",
    "in progress": "orange",
    done: "green",
  },
};

export const WareifyStatus: FC<{
  value: any;
  type: "inspection_result" | "wo_status" | "wor_status";
}> = ({ value, type }) => {
  let str_val = typeof value === "string" ? value : "";
  let color = (colors as any)[type][str_val.toLowerCase()];
  if (!color) {
    color = "#999";
  }

  if (!value) return null;
  return (
    <div
      className={cx(
        " c-text-white c-px-2 c-py-[3px] c-rounded-sm",
        css`
          font-size: 12px;
          text-align: center;
          width: 100px;
          background: ${color};
        `
      )}
    >
      {value}
    </div>
  );
};
