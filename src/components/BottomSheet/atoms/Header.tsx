import { Div, Text } from "style-wiz";
import IconButton from "../../IconButton";
import type { FC } from "react";
import type BottomSheetProps from "../props";
import type IconButtonProps from "../../IconButton/props";

type BottomSheetHeaderProps = {
  title: BottomSheetProps["title"];
  handleClose: IconButtonProps["onClick"];
};

const BottomSheetHeader: FC<BottomSheetHeaderProps> = function (props) {
  const { title, handleClose } = props;

  return (
    <Div
      height="3rem"
      border="border-light-main"
      borderSide="bottom"
      p="2"
      flex={["center", "between"]}
      position="relative"
      gap="3"
    >
      <Div
        flex={["center", "center"]}
        styles={{
          "@supports (inset-inline-start: 1rem)": {
            insetInlineStart: "var(--spacing-2)",
          },
          "@supports not (inset-inline-start: 1rem)": {
            '[dir="ltr"] &': { left: "var(--spacing-2)" },
            '[dir="rtl"] &': { right: "var(--spacing-2)" },
          },
        }}
      >
        <div>
          <IconButton
            name="chevron-down"
            color="text-secondary"
            size="lg"
            variant="text"
            onClick={handleClose}
          />
        </div>
      </Div>
      {title ? (
        <Div overflow="hidden">
          <Text as="p" size="md" bold truncate>
            {title}
          </Text>
        </Div>
      ) : null}
    </Div>
  );
};

export default BottomSheetHeader;
