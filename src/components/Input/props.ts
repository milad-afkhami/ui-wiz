import type { HTMLInputTypeAttribute, ReactEventHandler } from "react";
import type { AdornmentProps } from "../Adornment";
import type { NoneToVoidFunction } from "ts-wiz";

type EventHandler = ReactEventHandler<HTMLInputElement>;

interface ChangeEventHandler {
  (e: Parameters<EventHandler>[0], value: string): ReturnType<EventHandler>;
}

export default interface InputProps
  extends Partial<Omit<HTMLInputElement, "size" | "type">> {
  size?: "lg" | "md" | "sm";
  type?: HTMLInputTypeAttribute;
  label?: string;
  state?: {
    type?: "error" | "helper";
    message?: string;
  };
  onChange?: ChangeEventHandler;
  onBlur?: EventHandler;
  onFocus?: EventHandler;
  // onSubmit?: EventHandler;
  onSubmit?: (value: string) => void;
  onClear?: NoneToVoidFunction;
  onIconClick?: NoneToVoidFunction;
  hideCaret?: boolean;
  hasSuccessState?: boolean;
  startAdornment?: AdornmentProps["icon"];
  endAdornment?: AdornmentProps["icon"];
}
