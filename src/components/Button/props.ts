import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { TextProps } from "style-wiz";
import type { AdornmentProps } from "../Adornment";

interface ButtonTextProp extends Omit<TextProps, "children"> {
  content?: string;
}
export default interface ButtonProps
  extends PropsWithChildren<Omit<ButtonHTMLAttributes<Element>, "children">> {
  size?: "lg" | "md" | "sm";
  variant?: "text" | "contained" | "outlined";
  color?: "brand-primary" | "brand-secondary" | "assistive-error";
  text?: string | ButtonTextProp;
  loading?: boolean;
  disabled?: boolean;
  hasSuccessState?: boolean;
  icon?: AdornmentProps["icon"];
  trailingIcon?: AdornmentProps["icon"];
  block?: boolean;
  width?: string;
  height?: string;
  bordered?: boolean;
}
