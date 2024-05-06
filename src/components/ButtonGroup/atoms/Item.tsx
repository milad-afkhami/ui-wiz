import BaseButton from "../../BaseButton";
import type ButtonProps from "@components/Button/props";
import type { FC } from "react";
import type { ButtonGroupProps } from "..";
import type { NoneToVoidFunction } from "ts-wiz";

export interface ButtonGroupItemProps {
  label: string;
  selected?: ButtonGroupProps["selected"];
  value: string | number;
  onClick: NoneToVoidFunction;
  size?: ButtonProps["size"];
}

const ButtonGroupItem: FC<ButtonGroupItemProps> = (props) => {
  const { label, selected, value, onClick, size } = props;

  return (
    <BaseButton
      variant={selected === value ? "contained" : "outlined"}
      bordered={false}
      block
      size={size}
      onClick={onClick}
    >
      {label}
    </BaseButton>
  );
};

export default ButtonGroupItem;
