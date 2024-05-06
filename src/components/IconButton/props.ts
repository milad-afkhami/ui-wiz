import type IconProps from "../Icon/props";

export default interface IconButtonProps extends Omit<IconProps, "bold"> {
  variant?: "text" | "contained" | "outlined";
  color?: "brand-primary" | "brand-secondary" | "text-secondary";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
}
