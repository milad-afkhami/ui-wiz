import { styled } from "goober";
import type { LabelHTMLAttributes } from "react";
import type { RadioGroupItemProps } from ".";

type RadioGroupItemLabelProps = LabelHTMLAttributes<HTMLDivElement> &
  Pick<RadioGroupItemProps, "disabled" | "selected">;

const RadioGroupItemLabel = styled("label")<RadioGroupItemLabelProps>(
  ({ disabled, selected }) => ({
    marginBottom: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "start",
    gap: "var(--spacing-2)",
    userSelect: "none",
    "&:hover":
      !selected && !disabled
        ? {
            "& .radio-group__item__button__check-mark": {
              background: "var(--color-brand-paler)",
            },
          }
        : {},
  })
);

export default RadioGroupItemLabel;
