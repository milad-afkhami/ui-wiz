import { Div, type DivProps, Text } from "style-wiz";
import RadioGroupItem, { type RadioGroupItemProps } from "./atoms/Item";
import type { FC } from "react";
import type { Nullable } from "ts-wiz";

export interface RadioGroupProps {
  title?: string;
  name: string;
  items: Array<Omit<RadioGroupItemProps, "selected" | "name" | "onClick">>;
  selected: Nullable<string | number>;
  onChange: (value: RadioGroupProps["selected"]) => void;
  direction?: NonNullable<DivProps["flex"]>[2];
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    title,
    name,
    items,
    selected,
    direction = "column",
    onChange,
  } = props;

  return (
    <>
      {title ? (
        <Div mb="3">
          <Text>{title}</Text>
        </Div>
      ) : null}
      <Div flex={[, , direction]} gap="2">
        {items.map(({ label, value, disabled }, i) => (
          <RadioGroupItem
            key={i}
            name={name}
            label={label}
            value={value}
            disabled={disabled}
            selected={selected === value}
            onClick={() => onChange(value)}
          />
        ))}
      </Div>
    </>
  );
};

export default RadioGroup;
