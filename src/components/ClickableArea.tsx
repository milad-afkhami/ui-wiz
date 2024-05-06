import { keyframes, styled } from "goober";
import { Div, type DivProps } from "style-wiz";
import { type PropsWithChildren } from "react";
import ButtonHelper from "../helpers/button";

export interface ClickableAreaProps extends DivProps {
  rippleColor: DivProps["color"];
  hoverColor: DivProps["color"];
  disabled?: boolean;
  loading?: boolean;
}
export default function ClickableArea({
  children,
  hoverColor,
  rippleColor,
  disabled = false,
  loading = false,
  ...otherProps
}: PropsWithChildren<ClickableAreaProps>) {
  return (
    <Container
      onClick={ButtonHelper.renderRipple}
      hoverColor={hoverColor}
      rippleColor={rippleColor}
      disabled={disabled || loading}
    >
      <Div matchParent {...otherProps} position="relative" zIndex={2}>
        {children}
      </Div>
    </Container>
  );
}

const rippleAnimation = keyframes`
    to {
      transform: scale(2);
      opacity: 0;
    }
`;
const Container = styled<ClickableAreaProps>("div")(
  ({ disabled, hoverColor, rippleColor }) => ({
    width: "100%",
    height: "100%",
    userSelect: "none",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    ".ripple": {
      position: "absolute",
      borderRadius: "50%",
      transform: "scale(0)",
      animation: `${rippleAnimation} 800ms ease`,
      animationPlayState: disabled ? "paused" : "running",
      backgroundColor: `var(--color-${rippleColor})`,
    },
    ...(!disabled && {
      "&:hover": { background: `var(--color-${hoverColor})` },
    }),
  })
);
