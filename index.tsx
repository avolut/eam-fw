import "@/css/build.css";
import "@/utils/init";
export * from "@/exports";

import { Layout as CmsHubLayout } from "./apps/cmshub/Layout";
import { Layout as WareifyLayout } from "./apps/wareify/Layout";
import { WareifyStatus } from "./apps/wareify/Status";

export const wareify = {
  Layout: WareifyLayout,
  Status: WareifyStatus,
};

export const cmshub = {
  Layout: CmsHubLayout,
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
