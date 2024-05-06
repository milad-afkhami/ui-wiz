import { styled } from "goober";
import ClickableArea from "../ClickableArea";
import Icon from "../Icon";
import ButtonHelper from "../../helpers/button";
import type { FC } from "react";
import type IconButtonProps from "./props";

const dimension = {
  sm: "30px",
  md: "36px",
  lg: "42px",
};

const iconSize = {
  sm: "17px",
  md: "22px",
  lg: "24px",
};

const IconButton: FC<IconButtonProps> = (props) => {
  const {
    onClick,
    size = "md",
    variant = "contained",
    disabled,
    color = "brand-primary",
    ...rest
  } = props;

  return (
    <Container
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      variant={variant}
      color={color}
      size={size}
    >
      <ClickableArea
        disabled={disabled}
        flex={["center", "center"]}
        rippleColor={`${color}-light`}
        hoverColor={
          variant === "contained" ? `${color}-hover` : `${color}-paler`
        }
      >
        <Icon disabled={disabled} size={iconSize[size]} {...rest} />
      </ClickableArea>
    </Container>
  );
};

export default IconButton;

type ContainerProps = Pick<
  IconButtonProps,
  "variant" | "disabled" | "color" | "size"
>;

const Container = styled("div")<ContainerProps>((props) => {
  const { color = "text-secondary", disabled, variant, size = "md" } = props;
  const paints = ButtonHelper.setPaints({ variant, disabled, color });

  return {
    ...paints,
    overflow: "hidden",
    width: dimension[size],
    height: dimension[size],
    minWidth: dimension[size],
    minHeight: dimension[size],
    borderRadius: "var(--curve-sm)",
    cursor: !props.disabled ? "pointer" : undefined,
  };
});
