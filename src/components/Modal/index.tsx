import { styled } from "goober";
import { Div } from "style-wiz";
import ModalFooter from "./atoms/Footer";
import ModalHeader from "./atoms/Header";
import useEnhancedDelayedRender from "../../hooks/useDelayedRender";
import Divider from "../Divider";
import isomorphicPortal from "../../utils/isomorphicPortal";
import DialogBackdrop from "../DialogBackdrop";
import { OVERLAY_ROOT_ELEMENT_ID } from "../../constants/dom";
import type { HOCFunctionalComponent } from "../../types/components";
import type ModalProps from "./props";

const Modal: HOCFunctionalComponent<ModalProps> = function (props) {
  const {
    isOpen,
    children,
    title,
    onClose,
    cta,
    size = "sm",
    step = 0,
    onBackClick,
    panelProps = {},
  } = props;
  const { mounted, rendered } = useEnhancedDelayedRender(isOpen);

  if (!mounted) return null;

  return isomorphicPortal(
    <DialogBackdrop show={rendered} onClick={onClose} withMobilePushScreen>
      <Container onClick={(e) => e.stopPropagation()} size={size}>
        {title ? (
          <ModalHeader
            title={title}
            step={step}
            onBackClick={() => onBackClick?.()}
            handleClose={() => onClose?.()}
          />
        ) : null}

        <DividerContainer>
          <Divider color="border-light-main" />
        </DividerContainer>

        <Div height="100%" overflowY="auto" {...panelProps}>
          {children}
        </Div>

        {cta ? <ModalFooter cta={cta} /> : null}
      </Container>
    </DialogBackdrop>,
    `#${OVERLAY_ROOT_ELEMENT_ID}`
  );
};

interface ContainerProps extends Pick<ModalProps, "size"> {
  onClick(event: MouseEvent): void;
}

const Container = styled<ContainerProps>("div")`
  padding: var(--spacing-3) var(--spacing-4);
  background-color: var(--color-bg-primary-main);
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: min(550px, 100vh);
    width: ${({ size }) => (size === "sm" ? "425px" : "650px")};
    border-radius: var(--curve-sm);
    padding: var(--spacing-4) var(--spacing-5);
  }
`;

const DividerContainer = styled("div")`
  margin-top: var(--spacing-2);
  margin-bottom: var(--spacing-4);

  @media (min-width: 768px) {
    margin-bottom: var(--spacing-3);
  }
`;
export default Modal;
