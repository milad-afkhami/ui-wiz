import { Text } from "style-wiz";
import type { FC } from "react";
import type TextAreaProps from "../props";

const TextAreaPlaceholder: FC<Pick<TextAreaProps, "placeholder" | "value">> = (
  props
) => {
  const { placeholder, value } = props;

  return (
    <Text
      size="xsm"
      styles={{
        transition: "all var(--pace-fast)",
        opacity: value ? 0 : 0.5,
        position: "absolute",
        pointerEvents: "none",
        top: "var(--spacing-2)",
        "@supports (inset-inline-start: 1rem)": {
          insetInlineStart: "var(--spacing-3)",
        },
        "@supports not (inset-inline-start: 1rem)": {
          '[dir="ltr"] &': { left: "var(--spacing-3)" },
          '[dir="rtl"] &': { right: "var(--spacing-3)" },
        },
      }}
    >
      {placeholder}
    </Text>
  );
};

export default TextAreaPlaceholder;
