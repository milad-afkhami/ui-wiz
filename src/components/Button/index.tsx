import { forwardRef } from "react";
import { Div } from "style-wiz";
import ButtonText from "./atoms/Text";
import BaseButton from "../BaseButton";
import Adornment from "../Adornment";
import Spinner from "../Spinner";
import type ButtonProps from "./props";

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    text = "",
    name,
    loading,
    disabled,
    icon,
    trailingIcon,
    onClick,
    children,
    variant,
  } = props;
  const notAllowed = disabled || loading;

  return (
    <BaseButton
      {...props}
      ref={ref}
      onClick={!notAllowed ? onClick : undefined}
      name={name}
      data-testid="kitButton"
    >
      <Div height="100%" flex={["center", "center"]} gap="2">
        {loading ? (
          <Spinner size="xsm" contrast={variant === "contained"} />
        ) : (
          <>
            <Adornment icon={icon} />
            <ButtonText text={text} />
            {children}
            <Adornment icon={trailingIcon} />
          </>
        )}
      </Div>
    </BaseButton>
  );
});

export default Button;
