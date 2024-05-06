import { Text } from "style-wiz";
import { styled } from "goober";
import IconButton from "../../IconButton";
import type { FC } from "react";
import type ModalProps from "../props";
import type { NoneToVoidFunction } from "ts-wiz";

type ModalHeaderProps = {
  title: ModalProps["title"];
  step: ModalProps["step"];
  onBackClick: NoneToVoidFunction;
  handleClose: NoneToVoidFunction;
};

const ModalHeader: FC<ModalHeaderProps> = function (props) {
  const { title = "", handleClose, onBackClick, step } = props;

  return (
    <Container>
      {step ? (
        <IconButton
          color="text-secondary"
          name="chevron-right"
          multiDirection
          variant="text"
          size="lg"
          onClick={onBackClick}
        />
      ) : null}

      <div>
        <Text size="h-md" bold styles={{ lineHeight: "38px" }}>
          {title}
        </Text>
      </div>

      <IconButton
        color="text-secondary"
        name="close"
        variant="text"
        size="lg"
        onClick={() => handleClose()}
      />
    </Container>
  );
};

export default ModalHeader;

const Container = styled("div")`
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-3);
`;
