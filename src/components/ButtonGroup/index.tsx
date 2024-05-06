import { Div, Text } from "style-wiz";
import ButtonGroupItem, { type ButtonGroupItemProps } from "./atoms/Item";
import ButtonGroupItemsWrapper from "./atoms/Wrapper";
import Orientations from "../../constants/orientations";
import type { FC } from "react";
import type { ValueOf } from "ts-wiz";
import type ButtonProps from "@components/Button/props";

export interface ButtonGroupProps {
  title?: string;
  size?: ButtonProps["size"];
  items: Array<Pick<ButtonGroupItemProps, "label" | "value">>;
  selected?: ValueOf<ButtonGroupProps["items"]>["value"];
  onChange: (value: ValueOf<ButtonGroupProps["items"]>["value"]) => void;
  orientation?: Orientations;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const {
    title,
    items,
    selected,
    orientation = Orientations.Horizontal,
    onChange,
    size,
  } = props;
  const isHorizontal = orientation === Orientations.Horizontal;

  return (
    <>
      {title ? (
        <Div mb="3">
          <Text>{title}</Text>
        </Div>
      ) : null}

      <ButtonGroupItemsWrapper isHorizontal={isHorizontal}>
        {items.map(({ label, value }, i) => (
          <ButtonGroupItem
            key={i}
            label={label}
            value={value}
            size={size}
            selected={selected}
            onClick={() => onChange(value)}
          />
        ))}
      </ButtonGroupItemsWrapper>
    </>
  );
};

export default ButtonGroup;
