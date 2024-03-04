import "app/css/build.css";
import "@/utils/init";
export * from "@/exports";
import { icon } from "@/exports";
import { validate } from "uuid";
import { Layout as WareifyLayout } from "./app/Layout";
import { WareifyStatus } from "./app/Status";
import { loadSession, session } from "app/session";
export { ScanQR } from "app/comps/ScanQR";
import QrSvgRaw from "@wojtekmaj/react-qr-svg";
import { WareifyParam } from "app/Param";
export { wo_rule_eval, wo_rule_line } from "app/logic/wo_rule";

export const QRSVG = QrSvgRaw;

export const wareify = {
  Layout: WareifyLayout,
  Status: WareifyStatus,
  Param: WareifyParam,
};

export const isUUID = validate;

export const color = {
  good: "green",
  urgent: "red",
  caution: "orange",
};

if (!isEditor) {
  loadSession();
}

export const user = session.user;
export const reloadSession = loadSession;

const icon_types: any = {};
for (const k of Object.keys(icon)) {
  icon_types[k] = ""
}


export const _types = {
  user: `{
    name: string,
    id: string,
    role: 'admin' | 'maintenance' | 'inspector',
    id_client: string,
  }`,
  color: JSON.stringify(color),
  icon: JSON.stringify(icon_types)
};

export const page = {};
