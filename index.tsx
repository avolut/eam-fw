import "@/css/build.css";
import "./lib/utils/init";
export { Card } from "@/comps/custom/Card";
export { Detail } from "@/comps/custom/Detail";
export { Tab } from "@/comps/custom/Tab";
export { Field } from "@/comps/form/Field";
export { Form } from "@/comps/form/Form";
export { formatMoney } from "@/comps/form/InputMoney";
export { icon } from "@/comps/icon";
export { List } from "@/comps/list/List";
export { ListNew } from "@/comps/list/ListNew";
export { Slider } from "@/comps/ui/slider";
export { longDate, shortDate } from "@/utils/date";
export { Button } from "./lib/comps/ui/button";



import { Layout as CmsHubLayout } from "./apps/cmshub/Layout";
import { Layout as WareifyLayout } from "./apps/wareify/Layout";
import { WareifyStatus } from "./apps/wareify/Status";

export const wareify = { 
  Layout: WareifyLayout,
  Status: WareifyStatus 
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
