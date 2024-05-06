import type ButtonProps from "../components/Button/props";
import type { Properties as CSSProperties } from "csstype";

type PaintParams = Pick<ButtonProps, "variant" | "disabled"> & {
  color: string;
};

interface Paints
  extends Pick<
    CSSProperties,
    "color" | "backgroundColor" | "border" | "borderColor" | "background"
  > {
  "&:hover"?: Partial<Omit<Paints, "&:hover">>;
}

type DimensionParams = Pick<ButtonProps, "block" | "width" | "height" | "size">;

type Dimensions = Pick<CSSProperties, "minWidth" | "width" | "height">;

const heights = {
  sm: "36px",
  md: "42px",
  lg: "48px",
} as const;

export default class ButtonHelper {
  static renderRipple(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const { x: offsetX, y: offsetY } = button.getBoundingClientRect();

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - offsetX - radius}px`;
    circle.style.top = `${event.clientY - offsetY - radius}px`;
    circle.classList.add("ripple");

    const ripples = document.getElementsByClassName("ripple");

    Array.from(ripples).forEach((ripple) => ripple.remove());

    button.prepend(circle);
  }

  static setPaints({
    variant,
    disabled,
    color: colorGroup,
  }: PaintParams): Paints {
    let color = `var(--color-${colorGroup}-main)`;

    if (variant === "contained") color = `var(--color-${colorGroup}-contrast)`;
    if (disabled) color = "var(--color-text-disabled-main)";

    switch (variant) {
      case "outlined":
        return {
          color,
          backgroundColor: "var(--color-bg-primary-main)",
          border: `1px solid ${
            disabled
              ? "var(--color-border-light-main)"
              : `var(--color-${colorGroup}-main)`
          }`,
        };

      case "text":
        return {
          color,
          backgroundColor: "transparent",
          border: "none",
        };

      case "contained":
      default:
        return {
          color,
          backgroundColor: disabled
            ? "var(--color-bg-disabled-main)"
            : `var(--color-${colorGroup}-main)`,
          border: "none",
        };
    }
  }

  static setDimensions(dimensionParams: DimensionParams): Dimensions {
    const { block, width, height, size = "md" } = dimensionParams;

    let _width = width;
    if (block) _width ??= "100%";

    return {
      ...(_width ? { width: _width } : {}),
      height: height ?? heights[size],
    };
  }
}
