import { Text, type TextProps } from "style-wiz";
import omit from "../../../utils/omit";
import type ButtonProps from "../props";

export default function ButtonText(props: Pick<ButtonProps, "text">) {
  const { text } = props;

  const sharedProps = {
    userSelect: "none",
  } as TextProps;

  if (!text) return null;

  if (typeof text === "string") return <Text {...sharedProps}>{text}</Text>;

  if ("content" in text) {
    return (
      <Text {...sharedProps} {...omit(text, "content")}>
        {text.content}
      </Text>
    );
  }
  return null;
}
