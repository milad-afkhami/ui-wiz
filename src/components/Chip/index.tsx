import { Div, Text } from "style-wiz";
import Icon from "../Icon";
import ClickableArea from "../ClickableArea";
import type IconProps from "../Icon/props";

export type ChipProps = {
  text: string;
  variant: "filled" | "outlined";
  onCancelClick?: VoidFunction;
  icon?:
    | {
        type: "icon";
        name: IconProps["name"];
        size: IconProps["size"];
        color: IconProps["color"];
      }
    | { type: "image"; src: string; alt: string };
};

const Chip = (props: ChipProps) => {
  const { text, variant = "filled", onCancelClick, icon } = props;

  const backgroundColor =
    variant === "filled" ? "brand-primary-main" : undefined;
  const color =
    variant === "filled" ? "brand-primary-contrast" : "brand-primary-main";
  const hoverColor =
    variant === "filled" ? "brand-primary-hover" : "brand-primary-paler";

  return (
    <Div
      width="fit-content"
      curve="md"
      height="30px"
      px="1"
      flex={["center"]}
      gap="calc(var(--spacing-1) / 2))"
      border="brand-primary-main"
      bg={backgroundColor}
      color={color}
      styles={{
        "&:hover": {
          backgroundColor: `var(--color-${hoverColor})`,
        },
      }}
    >
      {icon &&
        (icon.type === "icon" ? (
          <Icon name={icon.name} size={icon.size} color={icon.color} />
        ) : (
          <Div overflow="hidden" width="24px" height="24px" curve="circle">
            <img src={icon.src} alt={icon.alt} width="24px" height="24px" />
          </Div>
        ))}

      <Div mx="1">
        <Text size="sm" color="inherit">
          {text}
        </Text>
      </Div>

      <Div width="24px" height="24px" curve="circle" overflow="hidden">
        <ClickableArea
          onClick={onCancelClick}
          rippleColor="brand-primary-light"
          hoverColor={hoverColor}
          flex={["center", "center"]}
        >
          <Icon name="cancel-outlined" size="h-lg" color="inherit" />
        </ClickableArea>
      </Div>
    </Div>
  );
};

export default Chip;
