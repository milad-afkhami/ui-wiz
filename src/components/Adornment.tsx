import { type FC, isValidElement } from "react";
import Icon from "./Icon";
import type IconProps from "./Icon/props";

export type AdornmentProps = {
  icon?: IconProps["name"] | IconProps | React.FC;
};

const Adornment: FC<AdornmentProps> = function (props) {
  const { icon } = props || {};

  if (!icon) return null;

  const size = "20px" as IconProps["size"];

  if (typeof icon === "string") {
    return <Icon name={icon} size={size} />;
  }
  if (typeof icon === "function") {
    const iconElement = icon({});
    const _isValidElement = isValidElement(iconElement);

    if (_isValidElement) return iconElement;
  }
  if (typeof icon === "object") {
    const _isValidElement = isValidElement(icon);

    if (_isValidElement) return icon;

    if (icon.name) return <Icon size={size} {...icon} />;
  }
  return null;
};

export default Adornment;
