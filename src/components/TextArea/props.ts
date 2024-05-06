import type { TextareaHTMLAttributes } from "react";
import type { InputProps } from "../..";

type TextAreaProps = TextareaHTMLAttributes<unknown> &
  Pick<
    InputProps,
    | "name"
    | "value"
    | "state"
    | "label"
    | "size"
    | "placeholder"
    | "onChange"
    | "onBlur"
  > & {
    rows?: number;
  };

export default TextAreaProps;
