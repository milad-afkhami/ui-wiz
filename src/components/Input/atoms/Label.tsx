import { Div, type DivProps, Text } from "style-wiz";
import type { FC } from "react";
import type InputProps from "../props";

type InputLabelProps = {
  htmlFor?: string;
  text?: InputProps["label"];
  floated?: boolean;
  color?: DivProps["color"];
  required?: boolean;
};

const InputLabel: FC<InputLabelProps> = function (props) {
  const { text = "", htmlFor, color, floated, required = false } = props;
  const _text = `${text}`;

  return (
    <Div
      as="label"
      // @ts-expect-error
      htmlFor={htmlFor}
      position="absolute"
      flex={["center", "center"]}
      pace="fast"
      m="0"
      dimensions={{ top: 0 }}
      styles={{
        pointerEvents: "none",
        userSelect: "none",
        transform: floated
          ? "translate(10px, -12px) scale(0.75)"
          : "translate(10px, 12px)",
        '[dir="rtl"] &': {
          transform: floated
            ? "translate(-10px, -12px) scale(0.75)"
            : "translate(-10px, 12px)",
        },
      }}
    >
      <Text size="inherit" color={color}>
        {_text}
      </Text>

      {required && (
        <Text size="inherit" color="assistive-error-main">
          *
        </Text>
      )}
    </Div>
  );
};

export default InputLabel;
