import type { TextProps } from "style-wiz";

// prettier-ignore
export type IconName = string;

// type IconName = ValueOf<(typeof iconsSelection)["icons"]>["icon"]["tags"];

export type PickedTextProps = Pick<
  TextProps,
  "color" | "size" | "styles" | "bold" | "className" | "onClick"
>;

export default interface IconProps extends PickedTextProps {
  name: IconName;
  prefix?: string;
  suffix?: string;
  multiDirection?: boolean;
  disabled?: boolean;
}
