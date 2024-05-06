import { Div, Text } from "style-wiz";
import { isValidElement, type FC, type ReactNode, useCallback } from "react";
import MenuItem, { type MenuItemProps } from "./atoms/Item";
import Icon from "../Icon";
import Popover, { type PopoverProps } from "../Popover";

interface MenuItemParams extends Omit<MenuItemProps, "onClick"> {
  content: { title: string; description?: string; icon?: string } | ReactNode;
}

export interface MenuProps
  extends Pick<PopoverProps, "isOpen" | "handleClose"> {
  onClickItem(item: MenuItemProps["value"]): void;
  items: MenuItemParams[];
}

const Menu: FC<MenuProps> = (props) => {
  const { isOpen, handleClose, items, onClickItem } = props;

  const isContentElement = useCallback(
    (content: MenuItemParams["content"]): content is ReactNode =>
      isValidElement(content),
    []
  );

  return (
    <Popover isOpen={isOpen} handleClose={handleClose}>
      {items.map(({ value, content, disabled }) => (
        <MenuItem
          key={value}
          value={value}
          disabled={disabled}
          onClick={() => onClickItem(value)}
        >
          {isContentElement(content) ? (
            content
          ) : (
            <Div>
              <Div>{content.icon ? <Icon name={content.icon} /> : null}</Div>
              <Div>
                <Text>{content.title}</Text>
                <Text>{content.description}</Text>
              </Div>
            </Div>
          )}
        </MenuItem>
      ))}
    </Popover>
  );
};

export default Menu;
