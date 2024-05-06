import {
  type ElementRef,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Div, type DivProps, Text } from "style-wiz";

export type SwitchProps = {
  text?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const innerCircleRadius = 10;
const outerCircleRadius = 14;

const Switch = (props: SwitchProps) => {
  const { disabled, onChange, text, checked: manualChecked = false } = props;

  const [checked, setChecked] = useState(manualChecked);

  const circleIndicator = useRef<ElementRef<"div">>(null);

  let containerBG: DivProps["bg"];
  let indicatorBG: DivProps["bg"];
  if (disabled) {
    containerBG = "bg-secondary-main";
    indicatorBG = "bg-secondary-light";
  } else if (checked) {
    containerBG = "brand-primary-light";
    indicatorBG = "brand-primary-main";
  } else {
    containerBG = "border-dark-main";
    indicatorBG = "bg-primary-dark";
  }

  useEffect(() => {
    if (manualChecked !== checked) {
      setChecked(manualChecked);
    }
  }, [manualChecked]);

  const moveCircleIndicator = useCallback((isChecked: boolean) => {
    if (circleIndicator.current) {
      circleIndicator.current.style.left = isChecked
        ? `calc(-50% + ${innerCircleRadius}px)`
        : `${outerCircleRadius}px`;
    }
  }, []);

  useEffect(() => {
    onChange?.(checked);
    moveCircleIndicator(checked);
  }, [checked]);

  return (
    <Div flex={["center"]}>
      <Div
        m="3"
        position="relative"
        cursor={disabled ? undefined : "pointer"}
        onClick={() => {
          if (!disabled) setChecked(!checked);
        }}
      >
        <Div curve="md" bg={containerBG} width="34px" height="14px" />

        <Div
          dimensions={{ top: "-50%" }}
          position="absolute"
          ref={circleIndicator}
          flex={["center", "center"]}
          curve="circle"
          width={`${outerCircleRadius * 2}px`}
          height={`${outerCircleRadius * 2}px`}
          overflow="hidden"
          styles={{
            transition: "left var(--pace-fast) ease-in-out",
            ...(disabled
              ? {}
              : {
                  "&:hover": {
                    backgroundColor: checked
                      ? "var(--color-brand-primary-paler)"
                      : "var(--color-bg-secondary-light)",
                  },
                }),
          }}
        >
          <Div
            shadow="1"
            width={`${innerCircleRadius * 2}px`}
            height={`${innerCircleRadius * 2}px`}
            bg={indicatorBG}
            curve="circle"
          />
        </Div>
      </Div>

      {text && (
        <Text
          styles={{ lineHeight: "25px" }}
          color={disabled ? "text-disabled-main" : undefined}
        >
          {text}
        </Text>
      )}
    </Div>
  );
};

export default Switch;
