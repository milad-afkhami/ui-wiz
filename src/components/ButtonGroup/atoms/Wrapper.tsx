import { styled } from "goober";

interface ButtonGroupItemsWrapperProps {
  isHorizontal: boolean;
}

const ButtonGroupItemsWrapper = styled<ButtonGroupItemsWrapperProps>("div")`
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? "row" : "column")};
  border: 1px solid var(--color-brand-primary-main);
  border-radius: var(--curve-sm);
  overflow: hidden;
  width: 100%;

  & > button {
    border: 0px solid var(--color-brand-primary-main);
    &:not(:last-child) {
      border-right-width: ${({ isHorizontal }) =>
        isHorizontal ? "1px" : "0px"};
      border-top-width: ${({ isHorizontal }) =>
        !isHorizontal ? "1px" : "0px"};
    }
  }

  & > button:first-child {
    margin-top: ${({ isHorizontal }) => (!isHorizontal ? "-1px" : "0px")};

    @supports (margin-inline-start: 1rem) {
      margin-inline-start: ${({ isHorizontal }) =>
        isHorizontal ? "-1px" : "0px"};
    }
    @supports not (margin-inline-start: 1rem) {
      [dir="rtl"] {
        margin-right: ${({ isHorizontal }) => (isHorizontal ? "-1px" : "0px")};
      }
      [dir="ltr"] {
        margin-left: ${({ isHorizontal }) => (isHorizontal ? "-1px" : "0px")};
      }
    }
  }
`;

export default ButtonGroupItemsWrapper;
