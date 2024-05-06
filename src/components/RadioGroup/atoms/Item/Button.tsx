import { type FC, useMemo } from "react";
import { Div } from "style-wiz";
import type { RadioGroupItemProps } from ".";

const RadioGroupItemButton: FC<
  Pick<RadioGroupItemProps, "disabled" | "selected">
> = (props) => {
  const { selected, disabled } = props;

  const bg = useMemo(() => {
    if (!selected) return "bg-primary-main";

    if (disabled) return "bg-disabled-main";

    return "brand-primary-main";
  }, [selected, disabled]);

  return (
    <Div
      width="1.5rem"
      height="1.5rem"
      mw="1.5rem"
      mh="1.5rem"
      border="border-light-main"
      borderW="2px"
      curve="circle"
      flex={["center", "center"]}
      position="relative"
    >
      <Div
        width="1rem"
        height="1rem"
        curve="circle"
        pace="x-fast"
        className="radio-group__item__button__check-mark"
        bg={bg}
      />
    </Div>
  );
};

export default RadioGroupItemButton;
