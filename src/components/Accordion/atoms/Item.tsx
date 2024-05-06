import {
  type ElementRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Div, Text } from "style-wiz";
import IconButton from "../../IconButton";
import { isClient } from "../../../utils/isClient";
import type { HOCFunctionalComponent } from "../../../types/components";
import type { NoneToVoidFunction } from "ts-wiz";

export type AccordionItemProps = {
  label: string;
  secondaryLabel?: string;
  __isOpen__?: boolean;
  onClick?: NoneToVoidFunction;
};

const AccordionItem: HOCFunctionalComponent<AccordionItemProps> = (props) => {
  const { __isOpen__, label, secondaryLabel, onClick, children } = props;

  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useRef<ElementRef<"div">>(null);

  const resizeObserverCallback: ResizeObserverCallback = useCallback(
    (entries) =>
      isClient() &&
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries?.length) return;

        setContentHeight(entries?.[0]?.target?.clientHeight);
      }),
    []
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const isSupported =
      isClient() &&
      "ResizeObserver" in window &&
      "requestAnimationFrame" in window;
    if (isSupported) {
      const resizeObserver = new ResizeObserver(resizeObserverCallback);

      if (contentRef.current) {
        resizeObserver?.observe?.(contentRef.current);
      }

      return () => {
        try {
          if (contentRef.current) {
            resizeObserver.unobserve(contentRef.current);
          }
        } catch (e) {
          // resize observer not supported
          // console.error(e);
        }
      };
    }
  }, [resizeObserverCallback]);

  return (
    <Div bg="bg-primary-light" className="accordion-item">
      <Div
        py="3"
        px="4"
        flex={["center", "space-between"]}
        onClick={onClick}
        cursor="pointer"
        styles={{ userSelect: "none" }}
      >
        <Div flex={["center"]}>
          <Div pEnd="6">
            <Text size="lg">{label}</Text>
          </Div>

          {secondaryLabel ? (
            <Text color="text-secondary-main">{secondaryLabel}</Text>
          ) : null}
        </Div>

        <Div pace="fast" rotate={__isOpen__ ? "-2q" : undefined}>
          <IconButton
            name="chevron-down"
            size="lg"
            variant="text"
            color="text-secondary"
          />
        </Div>
      </Div>

      <Div
        bg="brand-primary-paler"
        overflow="hidden"
        pace="fast"
        height={__isOpen__ ? `${contentHeight || undefined}px` : "0px"}
      >
        <Div px="4" py="2" ref={contentRef}>
          {children}
        </Div>
      </Div>
    </Div>
  );
};

export default AccordionItem;
