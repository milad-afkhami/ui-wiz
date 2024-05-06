import type { NoneToVoidFunction } from "ts-wiz";

export type ToastTypes = "success" | "error" | "warning" | "info";

export default interface ToastProps {
  title?: string;
  message: string;
  type: ToastTypes;
  handleClose?: NoneToVoidFunction;
}

export type ToastItem = Omit<ToastProps, "handleClose"> & {
  id?: string;
  duration?: number | "infinity";
  hasCloseButton?: boolean;
};
