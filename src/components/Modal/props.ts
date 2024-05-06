import type ButtonProps from "../Button/props";
import type { DivProps } from "style-wiz";
import type { NoneToVoidFunction } from "ts-wiz";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  onClose?: NoneToVoidFunction;
  /** modal call to actions */
  cta?: ButtonProps | Array<ButtonProps>;
  /** corresponding to Div Kit props that we want to pass down to panel area of modal */
  panelProps?: DivProps;
  /** modal size */
  size?: "sm" | "md";
} & (
  | {
      step: number;
      onBackClick: NoneToVoidFunction;
    }
  | {
      step?: never;
      onBackClick?: never;
    }
);

export default ModalProps;
