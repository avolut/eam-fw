import "app/css/build.css";
import "@/utils/init";
export * from "@/exports";
import { validate } from "uuid";
import { Layout as WareifyLayout } from "./app/Layout";
import { WareifyStatus } from "./app/Status";
import { loadSession, session } from "app/session";
export { ScanQR } from "app/comps/ScanQR";
import QrSvgRaw from "@wojtekmaj/react-qr-svg";

export const QRSVG = QrSvgRaw;

export const wareify = {
  Layout: WareifyLayout,
  Status: WareifyStatus,
};

export const isUUID = validate;

export const color = {
  good: "green",
  urgent: "red",
  caution: "orange",
};

loadSession();

export const user = session.user;
export const reloadSession = loadSession;

export const _types = {
  user: `{
    name: string,
    id: string,
    role: 'admin' | 'maintenance' | 'inspector'
  }`,
  color: JSON.stringify(color),
};
