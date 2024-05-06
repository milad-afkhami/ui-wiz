import MenuItemWrapper, { type MenuItemWrapperProps } from "./Wrapper";
import type { NoneToVoidFunction } from "ts-wiz";
import type { HOCFunctionalComponent } from "../../../../types/components";

export interface MenuItemProps extends MenuItemWrapperProps {
  value: string | number;
  onClick: NoneToVoidFunction;
}

const MenuItem: HOCFunctionalComponent<MenuItemProps> = (props) => {
  const { children, value, disabled, onClick } = props;

  return (
    <MenuItemWrapper
      role="option"
      data-value={value}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => {
        if (!disabled) onClick();
      }}
    >
      {children}
    </MenuItemWrapper>
  );
};

export default MenuItem;
