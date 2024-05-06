import useDeviceDetect from "../../hooks/useDeviceDetect";
import Modal from "../Modal";
import BottomSheet from "../BottomSheet";
import type ModalProps from "../Modal/props";
import type { HOCFunctionalComponent } from "../../types/components";
import type BottomSheetProps from "../BottomSheet/props";

export type AgentBasedOverlayProps = ModalProps & BottomSheetProps;

/** A kit that decides to render a content inside of a **Modal** or a **BottomSheet** Kit based on user agent. */
const AgentBasedOverlay: HOCFunctionalComponent<AgentBasedOverlayProps> =
  function (props) {
    const { children, ...restProps } = props || {};

    const { isMobile, isDesktop } = useDeviceDetect();

    if (isDesktop) {
      return <Modal {...restProps}>{children}</Modal>;
    }
    if (isMobile) {
      return <BottomSheet {...restProps}>{children}</BottomSheet>;
    }

    return null;
  };

export default AgentBasedOverlay;
