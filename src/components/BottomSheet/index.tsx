import { Div } from "style-wiz";
import BottomSheetHeader from "./atoms/Header";
import BottomSheetFooter from "./atoms/Footer";
import useEnhancedDelayedRender from "../../hooks/useDelayedRender";
import useKeyboardDisclosure from "../../hooks/useKeyboardDisclosure";
import isomorphicPortal from "../../utils/isomorphicPortal";
import DialogBackdrop from "../DialogBackdrop";
import { OVERLAY_ROOT_ELEMENT_ID } from "../../constants/dom";
import type { HOCFunctionalComponent } from "../../types/components";
import type BottomSheetProps from "./props";

const BottomSheet: HOCFunctionalComponent<BottomSheetProps> = function (props) {
  const {
    isOpen,
    children,
    title,
    onClose,
    cta,
    panelProps = {},
    viewportHeightPortion = 1 / 2,
  } = props;
  const { mounted, rendered } = useEnhancedDelayedRender(isOpen);
  const [isKeyboardOpen] = useKeyboardDisclosure();

  if (!mounted) return null;

  return isomorphicPortal(
    <DialogBackdrop show={rendered} onClick={onClose}>
      <Div
        onClick={(e) => e.stopPropagation()}
        bg="bg-primary-main"
        width="100%"
        Mw="500px"
        height={
          rendered
            ? `calc(${isKeyboardOpen ? 1 : viewportHeightPortion} * 100%)` // set height to full size when keyboard is open
            : "0px"
        }
        Mh="100%"
        mh="400px"
        dimensions={{
          bottom: rendered ? 0 : `calc(-${viewportHeightPortion} * 100%)`,
        }}
        pace="normal"
        curve="md"
        styles={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
        position="absolute"
        overflow="hidden"
        flex={[, , "column"]}
      >
        <BottomSheetHeader title={title} handleClose={onClose} />
        <Div
          p="2"
          bg="bg-primary-dark"
          height="100%"
          overflowY="auto"
          className="thin-scrollbar"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...panelProps}
        >
          {children}
        </Div>

        {cta ? <BottomSheetFooter cta={cta} /> : null}
      </Div>
    </DialogBackdrop>,
    `#${OVERLAY_ROOT_ELEMENT_ID}`
  );
};

export default BottomSheet;
