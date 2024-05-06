import { styled } from "goober";

export interface MenuItemWrapperProps {
  disabled?: boolean;
}

const MenuItemWrapper = styled("div")<MenuItemWrapperProps>(({ disabled }) => ({
  height: "2.5rem",
  padding: "var(--spacing-2)",
  backgroundColor: "var(--color-bg-primary-main)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  ...(disabled
    ? { cursor: "not-allowed", opacity: 0.5 }
    : {
        cursor: "pointer",
        "&:hover": { backgroundColor: "var(--color-bg-primary-hover)" },
      }),
}));

export default MenuItemWrapper;
