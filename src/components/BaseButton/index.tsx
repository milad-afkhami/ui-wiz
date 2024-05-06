import { type PropsWithChildren, forwardRef } from "react";
import { type CSSAttribute, styled } from "goober";
import ClickableArea from "../ClickableArea";
import ButtonHelper from "../../helpers/button";
import type ButtonProps from "../Button/props";

const StyledBaseButton = styled(
  "button",
  forwardRef
)<ButtonProps>((props) => {
  const {
    bordered = true,
    loading = false,
    disabled = false,
    variant,
    color = "brand-primary",
  } = props;
  const dimensions = ButtonHelper.setDimensions(props);
  const paints = ButtonHelper.setPaints({ variant, disabled, color });

  let cursor: CSSAttribute["cursor"] = "pointer";
  if (disabled) cursor = "not-allowed";
  else if (loading) cursor = "wait";

  return {
    ...dimensions,
    ...paints,
    "& i": { pointerEvents: "none" },
    backgroundPosition: "center",
    display: "block",
    borderRadius: bordered ? "var(--curve-sm)" : "unset",
    overflow: "hidden",
    lineHeight: "normal",
    outline: "none !important",
    cursor,
    textAlign: "center",
  };
});

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "contained",
      size,
      disabled,
      loading,
      color = "brand-primary",
      ...otherProps
    }: PropsWithChildren<ButtonProps>,
    ref
  ) => (
    <StyledBaseButton
      {...otherProps}
      ref={ref}
      size={size}
      variant={variant}
      disabled={disabled}
      loading={loading}
      color={color}
    >
      <ClickableArea
        disabled={disabled}
        loading={loading}
        flex={["center", "center"]}
        px="4"
        py="1"
        rippleColor={`${color}-light`}
        hoverColor={
          variant === "contained" ? `${color}-hover` : `${color}-paler`
        }
      >
        {children}
      </ClickableArea>
    </StyledBaseButton>
  )
);

export default BaseButton;
