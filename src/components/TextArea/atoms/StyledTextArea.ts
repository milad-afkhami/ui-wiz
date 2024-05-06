import { forwardRef } from "react";
import { styled } from "goober";

const StyledTextArea = styled(
  "div",
  forwardRef
)<{ rows: number }>(({ rows }) => ({
  width: "100%",
  resize: "none",
  minHeight: `${Math.ceil(rows * 33.3)}px`,
  padding: "var(--spacing-3) var(--spacing-4)",
  border: "1px solid var(--color-border-light-main)",
  transition: "all var(--pace-fast)",
  borderRadius: "var(--curve-xsm)",
  fontSize: "var(--font-size-sm)",
  "&:focus": {
    borderColor: "var(--color-border-dark-main)",

    // hide the placeholder
    "& ~ span": { opacity: 0 },
  },
}));

export default StyledTextArea;
