import "@/css/build.css";
import "@/utils/init";
export * from "@/exports";

import { Layout as WareifyLayout } from "./app/Layout";
import { WareifyStatus } from "./app/Status";

export const wareify = {
  Layout: WareifyLayout,
  Status: WareifyStatus,
};

export const color = {
  good: "green",
  urgent: "red",
  caution: "orange",
};

export const user = {
  name: "rizky",
  id: "",
};
export const _types = {
  user: JSON.stringify(user),
  color: JSON.stringify(color),
};
