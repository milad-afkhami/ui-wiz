import SpinnerIcon from "./atoms/Icon";
import type { FC } from "react";

export type SpinnerProps = {
  size?: "xsm" | "sm" | "md" | "lg";
  contrast?: boolean;
};
const sizes = { xsm: 16, sm: 24, md: 36, lg: 60 };

const Spinner: FC<SpinnerProps> = function (props) {
  const { size = "sm", contrast = false } = props;

  return (
    <SpinnerIcon
      size={sizes[size]}
      color={contrast ? "brand-primary-contrast" : "brand-primary-main"}
    />
  );
};

export default Spinner;
