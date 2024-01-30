import "@/css/build.css";
export { Field } from "@/comps/form/Field";
export { Form } from "@/comps/form/Form";
export { Button } from "./lib/comps/ui/button";
export { List } from "@/comps/list/List";
export { Card } from "@/comps/custom/Card";
export { Detail } from "@/comps/custom/Detail";
export { Tab } from "@/comps/custom/Tab";
export { formatMoney } from "@/comps/form/InputMoney";
export { shortDate, longDate } from "@/utils/date";
import { Layout as WareifyLayout } from "./apps/wareify/Layout";
import { Layout as CmsHubLayout } from "./apps/cmshub/Layout";
import { WareifyStatus } from "./apps/wareify/Status";
export { icon } from "@/comps/icon";

export const wareify = {
  Layout: WareifyLayout,
  Status: WareifyStatus
};

export const cmshub = {
  Layout: CmsHubLayout,
};

import "./lib/utils/init";

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
