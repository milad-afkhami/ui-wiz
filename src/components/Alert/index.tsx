import React, { type FC, useMemo } from "react";
import { Div, Text } from "style-wiz";
import Icon from "../Icon";

export interface AlertProps {
  message: string;
  showIcon?: boolean;
  type: "success" | "error" | "info" | "warning";
}

const Alert: FC<AlertProps> = ({ showIcon = true, message, type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case "success":
        return "check-outlined";
      case "info":
        return "info-outlined";
      case "warning":
        return "warning";
      case "error":
        return "error-outlined";
      default:
        return "info-outlined";
    }
  }, [type]);

  return (
    <Div
      bg={`assistive-${type}-paler`}
      border={`assistive-${type}-light`}
      p="3"
      height="50px"
      flex={["center"]}
      gap="3"
      curve="sm"
    >
      {showIcon ? (
        <Icon color={`assistive-${type}-light`} name={icon} size="lg" />
      ) : null}
      <Text color={`assistive-${type}-dark`}>{message}</Text>
    </Div>
  );
};

export default Alert;
