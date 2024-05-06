import { Div, Text } from "style-wiz";
import RadioGroupItemLabel from "./Label";
import RadioGroupItemButton from "./Button";
import type { RadioGroupProps } from "../..";
import type { FC } from "react";
import type { NoneToVoidFunction } from "ts-wiz";

export type RadioGroupItemProps = {
  name: RadioGroupProps["name"];
  selected: boolean;
  label: string;
  value: string | number;
  disabled?: boolean;
  onClick: NoneToVoidFunction;
};

const RadioGroupItem: FC<RadioGroupItemProps> = (props) => {
  const { name, label, value, selected, disabled, onClick } = props;

  return (
    <div>
      <input
        type="radio"
        name={name}
        id={String(value)}
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={onClick}
        hidden
      />
      <RadioGroupItemLabel
        htmlFor={String(value)}
        selected={selected}
        disabled={disabled}
      >
        <RadioGroupItemButton selected={selected} disabled={disabled} />
        <Div width="100%" flex={["center", "start"]}>
          <Text color={disabled ? "text-disabled-main" : undefined}>
            {label}
          </Text>
        </Div>
      </RadioGroupItemLabel>
    </div>
  );
};

export default RadioGroupItem;
