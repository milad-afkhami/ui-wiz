import { Div, Text } from "style-wiz";
import type { FC } from "react";
import type { DivProps } from "style-wiz";

type InputMetaProps = {
  text?: string;
  color?: DivProps["color"];
};

const InputMeta: FC<InputMetaProps> = function (props) {
  const { color, text } = props;

  return (
    <Div height="1.5rem" pt="1" pStart="2">
      {text ? (
        <Text as="p" size="xsm" color={color}>
          {text}
        </Text>
      ) : null}
    </Div>
  );
};

export default InputMeta;
