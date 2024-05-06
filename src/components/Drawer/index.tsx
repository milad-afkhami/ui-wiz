import { Div } from "style-wiz";
import useEnhancedDelayedRender from "../../hooks/useDelayedRender";
import isomorphicPortal from "../../utils/isomorphicPortal";
import DialogBackdrop, { type DialogBackdropProps } from "../DialogBackdrop";
import { OVERLAY_ROOT_ELEMENT_ID } from "../../constants/dom";
import type { HOCFunctionalComponent } from "@_types/components";
import type { NoneToVoidFunction } from "ts-wiz";

export interface DrawerProps {
  isOpen: DialogBackdropProps["show"];
  onClose?: NoneToVoidFunction;
}

const Drawer: HOCFunctionalComponent<DrawerProps> = function (props) {
  const { isOpen, children, onClose } = props;
  const { mounted, rendered } = useEnhancedDelayedRender(isOpen);

  if (!mounted) return null;

  const drawerWidth = "min(80%, 500px)";

  return isomorphicPortal(
    <DialogBackdrop show={rendered} onClick={onClose}>
      <Div
        onClick={(e) => e.stopPropagation()}
        bg="bg-primary-main"
        height="100%"
        width={drawerWidth}
        overflow="hidden"
        flex={[, , "column"]}
        styles={{
          "@supports (border-start-start-radius: 1rem)": {
            borderStartEndRadius: "var(--curve-md)",
            borderEndEndRadius: "var(--curve-md)",
          },
          "@supports not (border-start-start-radius: 1rem)": {
            '[dir="ltr"] &': {
              borderTopRightRadius: "var(--curve-md)",
              borderBottomRightRadius: "var(--curve-md)",
            },
            '[dir="rtl"] &': {
              borderTopLeftRadius: "var(--curve-md)",
              borderBottomLeftRadius: "var(--curve-md)",
            },
          },
          "@supports (inset-inline-start: 1rem)": {
            insetInlineStart: rendered ? "0%" : `calc(-1 * ${drawerWidth})`,
          },
          "@supports not (inset-inline-start: 1rem)": {
            '[dir="ltr"] &': {
              left: rendered ? "0%" : `calc(-1 * ${drawerWidth})`,
            },
            '[dir="rtl"] &': {
              right: rendered ? "0%" : `calc(-1 * ${drawerWidth})`,
            },
          },
        }}
        pace="fast"
        position="absolute"
      >
        <Div bg="bg-primary-dark" height="100%" overflowY="auto">
          {children}
        </Div>
      </Div>
    </DialogBackdrop>,
    `#${OVERLAY_ROOT_ELEMENT_ID}`
  );
};

export default Drawer;
