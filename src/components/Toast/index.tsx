import { Div, Text } from "style-wiz";
import { keyframes } from "goober";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import type { FC } from "react";
import type ToastProps from "./props";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const iconName = {
  success: "check",
  error: "notification",
  warning: "warning",
  info: "info-outlined",
};
const Toast: FC<ToastProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleClose, title, message, type } = props;

  useEffect(() => {
    if (!isOpen) setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <Div
      flex={["center", "space-between"]}
      width="320px"
      px="4"
      py="3"
      bg={`assistive-${type}-light`}
      color={`assistive-${type}-contrast`}
      curve="sm"
      style={{
        animationPlayState: isOpen ? "running" : "paused",
        animation: `${slideIn} var(--pace-normal) ease-in-out forwards`,
      }}
    >
      <Div flex={["start"]} gap="3">
        <Icon name={iconName[type]} size="h-md" />
        <Div flex={[, , "column"]} gap="2">
          {title ? <Text bold>{title}</Text> : null}
          <Text size="sm">{message}</Text>
        </Div>
      </Div>
      {handleClose ? (
        <Div
          flex={["center", "center"]}
          gap="1"
          cursor="pointer"
          onClick={handleClose}
        >
          <Text size="sm">Close</Text>
          <Icon name="close" size="lg" />
        </Div>
      ) : null}
    </Div>
  );
};

export default Toast;
