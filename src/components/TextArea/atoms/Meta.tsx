import { Div, Text } from "style-wiz";
import type { FC } from "react";
import type TextAreaProps from "../props";
import type { NonUndefined } from "ts-wiz";

const TextAreaMeta: FC<NonUndefined<TextAreaProps["state"]>> = (props) => {
  const { type, message } = props;

  if (!message) return null;

  return (
    <Div mt="1">
      <Text as="p" size="xsm" color={`assistive-${type}-main`}>
        {message}
      </Text>
    </Div>
  );
};

export default TextAreaMeta;
