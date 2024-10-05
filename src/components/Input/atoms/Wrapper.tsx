import { styled } from "goober";
import { Div, type DivProps, Text } from "style-wiz";
import InputLabel from "./Label";
import InputHelper from "../../../helpers/input";
import isNullish from "../../../utils/isNullish";
import type { HOCFunctionalComponent } from "../../../types/components";
import type InputProps from "../props";

interface InputWrapperProps
  extends Omit<
    InputProps,
    Exclude<
      keyof HTMLInputElement,
      "id" | "className" | "placeholder" | "value" | "disabled" | "required"
    >
  > {
  focused: boolean;
}

const InputWrapper: HOCFunctionalComponent<InputWrapperProps> = function (
  props
) {
  const {
    id,
    className,
    children,
    focused,
    placeholder,
    value,
    label = "",
    state,
    disabled,
    required,
    startAdornment,
  } = props;
  const { labelColor, borderColor, borderHoveredColor } = InputHelper.getColors(
    { state, focused, disabled }
  );
  const labelFloated = Boolean(
    focused ||
      (!isNullish(value) && value !== "") ||
      placeholder ||
      startAdornment
  );

  return (
    <Container
      className={className}
      data-testid="kitInput"
      labelFloated={labelFloated}
      borderHoveredColor={borderHoveredColor}
    >
      {children}
      <Div
        as="fieldset"
        position="absolute"
        width="100%"
        zIndex={1}
        border={borderColor}
        borderW={focused ? "2px" : "1px"}
        curve="sm"
        dimensions={{ top: "-12px", bottom: 0 }}
        styles={{ pointerEvents: "none" }}
        px="2"
      >
        <Div
          styles={{ visibility: "hidden", whiteSpace: "nowrap" }}
          as="legend"
          pace="fast"
          Mw={labelFloated ? "100%" : "0.01px"}
        >
          <Text>{label}</Text>
        </Div>
      </Div>
      <InputLabel
        htmlFor={id}
        required={required}
        text={label}
        floated={labelFloated}
        color={labelColor}
      />
    </Container>
  );
};

interface ContainerProps extends Pick<InputWrapperProps, "id" | "className"> {
  borderHoveredColor?: DivProps["color"];
  labelFloated: boolean;
}

const Container = styled<ContainerProps>("div")`
  position: relative;
  height: 3rem;
  border-radius: var(--curve-sm);
  transition: all var(--pace-fast);
  display: flex;
  align-items: center;

  &,
  & *:not(i) {
    font-size: var(--font-size-sm);
  }

  &:hover fieldset {
    border-color: ${(props) =>
      props.borderHoveredColor && !props.labelFloated
        ? props.borderHoveredColor
        : "unset"};
  }
`;
export default InputWrapper;
