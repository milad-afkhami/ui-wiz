import { Div, type DivProps } from "style-wiz";
import { useRef, type ElementRef } from "react";
import useEnhancedDelayedRender from "../../hooks/useDelayedRender";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import type { HOCFunctionalComponent } from "../../types/components";
import type { NoneToVoidFunction } from "ts-wiz";

export interface PopoverProps extends Pick<DivProps, "height" | "Mh"> {
  isOpen: boolean;
  handleClose: NoneToVoidFunction;
}

const Popover: HOCFunctionalComponent<PopoverProps> = (props) => {
  const { children, isOpen, handleClose, height, Mh } = props;
  const { popoverMounted, popoverRendered } = useEnhancedDelayedRender(isOpen, {
    name: "popover",
  });

  const ref = useRef<ElementRef<"div">>(null);

  useOnClickOutside(ref, handleClose);

  if (!popoverMounted) return null;

  return (
    <Div
      ref={ref}
      opacity={popoverRendered ? 1 : 0}
      styles={{
        transformOrigin: "top",
        transform: popoverRendered ? "scale(1)" : "scale(0.75, 0.5)",
      }}
      pace="x-fast"
      position="absolute"
      width="100%"
      height={height}
      Mh={Mh}
      shadow="md"
      curve="xsm"
      overflowX="hidden"
      overflowY="auto"
      bg="bg-primary-main"
      dimensions={{ top: "calc(100% + var(--spacing-2))" }}
      zIndex="200"
      role="listbox"
    >
      {children}
    </Div>
  );
};

export default Popover;
