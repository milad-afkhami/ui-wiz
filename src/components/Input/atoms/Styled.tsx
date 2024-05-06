import { forwardRef } from "react";
import { styled } from "goober";
import placeholder from "../../../stylesheets/utils/placeholder";

const placeholderStyles = {
  fontSize: "var(--font-size-xsm)",
  color: "var(--color-text-secondary-main)",
};

const StyledInput = styled(
  "input",
  forwardRef
)<{ hideCaret?: boolean }>(({ hideCaret }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  fontSize: "var(--font-size-sm)",
  border: "none",
  padding: "var(--spacing-2)",
  borderRadius: "var(--curve-sm)",
  background: "none",
  color: "var(--color-text-primary-main)",
  ...(hideCaret ? { caretColor: "transparent" } : {}),
  ...placeholder(placeholderStyles),
}));

export default StyledInput;
