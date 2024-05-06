import { styled } from "goober";
import { cloneElement, useState, type ReactElement, useEffect } from "react";
import AccordionItem from "./atoms/Item";
import type { AccordionItemProps } from "./atoms/Item";

export type AccordionProps = {
  children: ReactElement<AccordionItemProps>[];
  openItemIndex?: number;
};

const Accordion = (props: AccordionProps) => {
  const { children, openItemIndex: manualOpenItemIndex = -1 } = props;

  const [openItemIndex, setOpenItemIndex] =
    useState<number>(manualOpenItemIndex);

  useEffect(() => {
    if (manualOpenItemIndex !== openItemIndex)
      setOpenItemIndex(manualOpenItemIndex);
  }, [manualOpenItemIndex]);

  return (
    <Container>
      {children.map((child, index) =>
        cloneElement(child, {
          __isOpen__: index === openItemIndex,
          onClick: () => {
            setOpenItemIndex(openItemIndex === index ? -1 : index);
            child.props.onClick?.();
          },
        })
      )}
    </Container>
  );
};

export default Accordion;
export { AccordionItem, AccordionItemProps };

const Container = styled("div")`
  .accordion-item {
    border: 1px solid var(--color-border-light-main);
    border-bottom: none;
  }

  .accordion-item:first-child {
    border-top-left-radius: var(--curve-sm);
    border-top-right-radius: var(--curve-sm);
  }

  .accordion-item:last-child {
    border-bottom-left-radius: var(--curve-sm);
    border-bottom-right-radius: var(--curve-sm);
    border-bottom: 1px solid var(--color-border-light-main);
  }
`;
