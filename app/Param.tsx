import { FC } from "react";
import { m_inspection_parameter } from "../typings/prisma";
import { WareifyStatus } from "./Status";
import { useLocal } from "@/utils/use-local";
import { Button, Field, ScanQR, Slider } from "..";
import { Textarea } from "@/comps/ui/textarea";

export const WareifyParam: FC<{ param: m_inspection_parameter }> = ({
  param,
}) => {
  const local = useLocal({
    value: 100,
    take_photo: false,
  });

  let result = "-";
  if (local.value <= 50) result = "Urgent";
  if (local.value >= 51 && local.value <= 75) result = "Caution";
  if (local.value >= 76) result = "Good";

  console.log(param);
  if (param.param_type === "Parameter") {
    return (
      <div
        className={cx("c-flex-1 c-flex c-items-stretch c-flex-col c-w-full")}
      >
        <div className="c-flex c-justify-between c-items-end">
          <div>{param.name}</div>
          <WareifyStatus value={result} type="inspection_result" />
        </div>

        <div className="c-flex c-flex-1 c-py-2 c-space-x-2">
          <div className="c-flex-1 c-flex c-flex-col c-items-stretch c-space-y-2 c-mt-2">
            <Slider
              value={[local.value]}
              step={1}
              max={100}
              min={0}
              onValueChange={(value) => {
                local.value = value[0];
                local.render();
              }}
            />
            <div className="c-flex c-justify-between c-text-sm ">
              <div className="c-text-black">{param.min_value_description}</div>
              <div className="c-text-black">{param.max_value_description}</div>
            </div>
          </div>
          <div className="c-p-1 c-m-2 c-flex c-w-[50px] c-justify-center c-items-center c-bg-slate-200 c-border c-rounded-sm">
            {local.value}
          </div>
        </div>
        <Textarea placeholder="Note..." />
      </div>
    );
  }

  if (param.param_type === "Fact") {
    return (
      <div
        className={cx("c-flex-1 c-flex c-items-stretch c-flex-col c-w-full")}
      >
        <div className="c-flex c-justify-between c-items-center">
          <div>{param.name}</div>
          <Button
            variant={"secondary"}
            onClick={() => {
              local.take_photo = true;
              local.render();
            }}
          >
            Take Picture
          </Button>
        </div>

        {local.take_photo && (
          <div className="c-fixed c-inset-0 c-bg-white c-z-50">
            <ScanQR
              onCancel={() => {
                local.take_photo = false;
                local.render();
              }}
              onScanned={() => {
                local.take_photo = false;
                local.render();
              }}
            />
          </div>
        )}
      </div>
    );
  }
};
