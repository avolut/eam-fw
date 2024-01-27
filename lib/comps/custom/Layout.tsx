import { FC, ReactNode, useLayoutEffect, useState } from "react";
import { MobileLayout } from "./layout/MobileLayout";

const w = window as any;
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [_, set] = useState({});
  const render = () => set({});
  useLayoutEffect(() => {
    const fn = function () {
      if (isEditor) {
        setTimeout(() => {
          const mode = localStorage.getItem("prasi-editor-mode");
          if (mode === "mobile") {
            w.isMobile = true;
            w.isDesktop = false;
          } else {
            w.isMobile = false;
            w.isDesktop = true;
          }
          render();
        }, 50);
      } else {
        if (window.matchMedia("screen and (max-width: 768px)").matches) {
          w.isMobile = true;
          w.isDesktop = false;
        } else {
          w.isMobile = false;
          w.isDesktop = true;
        }
      }
      render();
    };
    if (!isEditor) {
      window.addEventListener("resize", fn);
      return () => {
        window.removeEventListener("resize", fn);
      };
    } else {
      const el = document.querySelector(".main-editor-content");

      if (el) {
        const rx = new ResizeObserver(fn);
        rx.observe(el);
        return () => {
          rx.disconnect();
        };
      }
    }
  }, []);

  if (isMobile) return <MobileLayout children={children} />;
  return <DesktopLayout children={children} />;
};

const DesktopLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cx("c-flex c-flex-1 c-flex-row")}>Desktop{children}</div>
  );
};
