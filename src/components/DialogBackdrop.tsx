import { styled } from "goober";
import useKeyPress from "../hooks/useKeyPress";
import type { HOCFunctionalComponent } from "../types/components";

export interface DialogBackdropProps {
  show: boolean;
  onClick?: () => void;
  withMobilePushScreen?: boolean;
}

const DialogBackdrop: HOCFunctionalComponent<DialogBackdropProps> = function (
  props
) {
  const { children, show, onClick = () => {}, withMobilePushScreen } = props;

  useKeyPress("Escape", onClick);

  return (
    <Container
      role="presentation"
      onClick={onClick}
      className="dialog__backdrop"
      show={show}
      withMobilePushScreen={withMobilePushScreen}
    >
      {children ?? undefined}
    </Container>
  );
};

interface ContainerProps extends DialogBackdropProps {
  role: string;
  className: string;
}

const Container = styled<ContainerProps>("div")(
  ({ show, withMobilePushScreen }) => ({
    zIndex: 1000,
    position: "fixed",
    backgroundColor: "#00000080",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: show ? "auto" : "none",
    ...(withMobilePushScreen
      ? {
          opacity: 1,
          transition: `all var(--pace-normal)`,
          "@supports (inset-inline-start: 1rem)": {
            insetInlineStart: show ? "0%" : "-100%",
          },
          "@supports not (inset-inline-start: 1rem)": {
            '[dir="ltr"] &': { left: show ? "0%" : "-100%" },
            '[dir="rtl"] &': { right: show ? "0%" : "-100%" },
          },
          "@media (min-width: 768px)": {
            transition: "all var(--pace-x-fast)",
            opacity: show ? 1 : 0,
            "@supports (inset-inline-start: 1rem)": { insetInlineStart: "0%" },
            "@supports not (inset-inline-start: 1rem)": {
              '[dir="ltr"] &': { left: "0%" },
              '[dir="rtl"] &': { right: "0%" },
            },
          },
        }
      : { opacity: show ? 1 : 0, transition: "all  var(--pace-x-fast)" }),
  })
);

export default DialogBackdrop;
