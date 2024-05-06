import { Div, Text } from "style-wiz";
import type { FC } from "react";
import type TextAreaProps from "../props";

const TextAreaLabel: FC<Pick<TextAreaProps, "label" | "required">> = (
  props
) => {
  const { label, required } = props;

  return label ? (
    <Div mb="1">
      <Text as="label" size="sm">
        {label}
      </Text>
      {required && (
        <Text size="inherit" color="assistive-error-main">
          *
        </Text>
      )}
    </Div>
  ) : null;
};

export default TextAreaLabel;
