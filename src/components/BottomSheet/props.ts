import type ButtonProps from "../Button/props";
import type { DivProps } from "style-wiz";

export default interface BottomSheetProps {
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
  /** bottom sheet call to actions */
  cta?: ButtonProps | Array<ButtonProps>;
  /** corresponding to Div Kit props that we want to pass down to panel area of bottom sheet */
  panelProps?: DivProps;
  /** initial viewport height portion */
  viewportHeightPortion?: number;
  /** should push an state to history or not */
  pushState?: boolean;
}
