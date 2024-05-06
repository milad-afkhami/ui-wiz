import { Div, Text } from "style-wiz";
import {
  type ElementRef,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import ClickableArea from "../ClickableArea";
import Icon from "../Icon";
import type IconProps from "../Icon/props";

type TabItem = {
  icon?: Pick<IconProps, "name" | "color" | "size">;
  title?: string;
};

export type TabProps = {
  defaultSelectedItemIndex?: number;
  items: TabItem[];
  onChange?: (index: number) => void;
};

const Tab = (props: TabProps) => {
  const { items, defaultSelectedItemIndex, onChange } = props;

  const [selectedItemIndex, setSelectedItemIndex] = useState(
    defaultSelectedItemIndex ?? 0
  );

  const indicatorRef = useRef<ElementRef<"div">>(null);
  const wrapperRef = useRef<ElementRef<"div">>(null);

  const moveIndicator = useCallback((activeIndex: number) => {
    const wrapper = wrapperRef.current;
    const indicator = indicatorRef.current;

    if (!wrapper || !indicator) return;

    const tab = wrapper.childNodes[activeIndex] as HTMLElement;

    const { offsetLeft, offsetWidth } = tab;

    indicator.style.left = `${offsetLeft}px`;
    indicator.style.width = `${offsetWidth}px`;
  }, []);

  useEffect(() => {
    onChange?.(selectedItemIndex);
    moveIndicator(selectedItemIndex);
  }, [selectedItemIndex]);

  return (
    <Div display="flex" ref={wrapperRef} position="relative">
      {items.map(({ title, icon }, index) => (
        <Div
          key={index}
          flexPortion={1}
          bg={selectedItemIndex === index ? "brand-primary-paler" : undefined}
        >
          <ClickableArea
            rippleColor="brand-primary-light"
            hoverColor="bg-secondary-light"
            onClick={() => setSelectedItemIndex(index)}
          >
            <Div
              p="2"
              color={
                selectedItemIndex === index
                  ? "brand-primary-main"
                  : "text-secondary-main"
              }
              mh="48px"
              flex={["center", "center", "column"]}
              gap="2"
            >
              {icon && <Icon {...icon} />}

              {title && (
                <Text
                  bold={selectedItemIndex === index}
                  size="sm"
                  color="inherit"
                >
                  {title}
                </Text>
              )}
            </Div>
          </ClickableArea>
        </Div>
      ))}

      <Div
        ref={indicatorRef}
        height="2px"
        position="absolute"
        bg="brand-primary-main"
        pace="fast"
        dimensions={{ bottom: 0 }}
      />
    </Div>
  );
};

export default Tab;
