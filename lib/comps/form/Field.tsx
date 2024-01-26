import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/comps/ui/form";
import { FC, useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { useLocal } from "@/utils/use-local";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/comps/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/comps/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { PopUpDropdown } from "./PopUpDropdown";
import { ButtonOptions } from "./ButtonOptions";
import { Textarea } from "../ui/textarea";
import autosize from "autosize";
import { InputMoney } from "./InputMoney";
import { Date } from "./Date";
import { Datetime } from "./Datetime";

export const Field: FC<{
  name: string;
  label: string;
  desc?: string;
  form: { hook: UseFormReturn<any, any, undefined>; render: () => void };
  type:
    | "text"
    | "textarea"
    | "dropdown"
    | "password"
    | "button-options"
    | "date"
    | "datetime"
    | "money";
  required: "y" | "n";
  options: () => Promise<{ value: string; label: string }[]>;
}> = ({ name, form, desc, label, type, required, options }) => {
  const local = useLocal({
    dropdown: {
      popup: false,
    },
    date: {
      // label: "",
      popup: false,
    },
  });

  const textAreaRef = useRef<any>();
  useEffect(() => {
    autosize(textAreaRef.current);
    return () => {
      autosize.destroy(textAreaRef.current);
    };
  }, []);

  // if (type === "date" || type === "datetime") {
  //   try {
  //     local.date.label = format(form.hook.getValues(name), "PPP");
  //   } catch (e) {}
  // }

  return (
    <>
      {local.dropdown.popup && (
        <PopUpDropdown
          on_close={() => {
            local.dropdown.popup = false;
            local.render();
          }}
          on_select={(value: any) => {
            form.hook.setValue(name, value);
          }}
          title={label}
          options={options}
        />
      )}
      <FormField
        control={form.hook.control}
        name={name}
        render={({ field }) => (
          <FormItem className="c-flex c-flex-1 c-flex-col">
            <FormLabel className="flex">
              {label}
              {required === "y" && <h1 className="c-ml-1 c-text-red-500">*</h1>}
            </FormLabel>
            <FormControl>
              <>
                {["text", "password"].includes(type) && (
                  <Input {...field} type={type} />
                )}

                {type === "textarea" && (
                  <Textarea {...field} ref={textAreaRef} />
                )}

                {type === "dropdown" && (
                  <Button
                    onClick={() => {
                      local.dropdown.popup = true;
                      local.render();
                    }}
                    variant={"outline"}
                  >
                    {field.value}
                  </Button>
                )}

                {type === "date" && (
                  <Date
                    on_select={(value: any) => {
                      form.hook.setValue(name, value);
                    }}
                  />
                )}

                {type === "datetime" && (
                  <Datetime
                    on_select={(value: any) => {
                      form.hook.setValue(name, value);
                    }}
                  />
                )}

                {type === "button-options" && (
                  <ButtonOptions
                    options={options}
                    value={field.value}
                    on_select={(value: any) => {
                      form.hook.setValue(name, value);
                    }}
                  />
                )}

                {type === "money" && (
                  <InputMoney
                    value={field.value}
                    on_select={(value: any) => {
                      form.hook.setValue(name, value);
                    }}
                  />
                )}
              </>
            </FormControl>
            <FormDescription>{desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
