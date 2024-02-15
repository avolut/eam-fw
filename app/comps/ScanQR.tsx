import { useLocal } from "@/utils/use-local";
import { FC, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

export const ScanQR: FC<{
  onCancel: () => void;
  onScanned: (code: string) => void;
}> = ({ onCancel, onScanned }) => {
  const local = useLocal(
    {
      el: null as HTMLDivElement | null,
      device: {
        active: localStorage.getItem("prefered-cam-id") || "",
        list: [] as string[],
      },
      canvas: null as HTMLCanvasElement | null,
      scanel: null as Webcam | null,
      streaming: true,
    },
    async () => {
      await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
      const devices = await navigator.mediaDevices.enumerateDevices();
      local.device.list = devices
        .filter((e) => e.kind.toLowerCase().includes("video"))
        .map((e) => {
          return e.deviceId;
        });

      if (!local.device.active) {
        for (const device of devices) {
          if (device.kind.toLowerCase().includes("video")) {
            if (device.label.toLowerCase().includes("back")) {
              local.device.active = device.deviceId;
            }
          }
        }

        if (!local.device.active) {
          for (const device of devices) {
            if (device.kind.toLowerCase().includes("video")) {
              local.device.active = device.deviceId;
            }
          }
        }
      }

      local.render();

      const video = local.scanel?.video;
      const canvas = local.canvas?.getContext("2d", {
        willReadFrequently: true,
      });
      const tick = () => {
        if (video && canvas && local.canvas) {
          if (video.readyState === video.HAVE_ENOUGH_DATA && canvas) {
            canvas.drawImage(
              video,
              0,
              0,
              local.canvas.width,
              local.canvas.height
            );
            var imageData = canvas.getImageData(
              0,
              0,
              local.canvas.width,
              local.canvas.height
            );

            var code = jsQR(imageData.data, imageData.width, imageData.height, {
              inversionAttempts: "dontInvert",
            });
            if (code) {
              drawLine(
                canvas,
                code.location.topLeftCorner,
                code.location.topRightCorner,
                "#FF3B58"
              );
              drawLine(
                canvas,
                code.location.topRightCorner,
                code.location.bottomRightCorner,
                "#FF3B58"
              );
              drawLine(
                canvas,
                code.location.bottomRightCorner,
                code.location.bottomLeftCorner,
                "#FF3B58"
              );
              drawLine(
                canvas,
                code.location.bottomLeftCorner,
                code.location.topLeftCorner,
                "#FF3B58"
              );

              onScanned(code.data);
            }
          }
        }
        if (local.streaming) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }
  );

  useEffect(() => {
    return () => {
      local.streaming = false;
    };
  }, []);

  return (
    <div className="c-flex-1 c-flex c-w-full c-h-full c-relative">
      <div
        className={cx(
          "c-absolute c-inset-0",
          css`
            video,
            canvas {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }

            video {
              z-index: 1;
            }

            canvas {
              z-index: 0;
              opacity: 0;
            }
          `
        )}
        ref={(el) => (local.el = el)}
      >
        {!isEditor && local.streaming && (
          <>
            <Webcam
              audio={false}
              ref={(el) => (local.scanel = el)}
              videoConstraints={{
                deviceId: local.device.active,
              }}
            />
            <canvas
              className="c-opacity-0"
              ref={(el) => (local.canvas = el)}
            ></canvas>
          </>
        )}
      </div>
      <div className="c-absolute c-bottom-0 c-flex c-items-center c-justify-center c-left-0 c-right-0 p-3 c-z-20 c-space-x-2">
        <div
          onClick={() => {
            onCancel();
          }}
          className=" c-bg-white c-p-4 c-rounded-md hover:c-bg-blue-300"
          dangerouslySetInnerHTML={{
            __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`,
          }}
        ></div>
        {local.device.list.length > 1 && (
          <div
            onClick={() => {
              const idx = local.device.list.indexOf(local.device.active);
              if (idx === local.device.list.length - 1) {
                local.device.active = local.device.list[0];
              } else {
                local.device.active = local.device.list[idx + 1];
              }
              localStorage.setItem("prefered-cam-id", local.device.active);

              local.render();
            }}
            className=" c-bg-white c-p-4 c-rounded-md focus:c-bg-blue-600 focus:text-white"
            dangerouslySetInnerHTML={{
              __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-switch-camera"><path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"/><circle cx="12" cy="12" r="3"/><path d="m18 22-3-3 3-3"/><path d="m6 2 3 3-3 3"/></svg>`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

function drawLine(
  canvas: CanvasRenderingContext2D,
  begin: any,
  end: any,
  color: any
) {
  if (canvas) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }
}
