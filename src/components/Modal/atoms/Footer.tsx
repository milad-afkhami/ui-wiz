import { type FC, useMemo } from "react";
import { styled } from "goober";
import Button from "../../Button";
import type ModalProps from "../props";

type ModalFooterProps = Pick<ModalProps, "cta">;

const ModalFooter: FC<ModalFooterProps> = function (props) {
  const { cta } = props;

  /** Array of call to actions */
  const ctas = useMemo(() => (Array.isArray(cta) ? cta : [cta]), [cta]);

  return (
    <Container>
      {ctas.map((ctaItem) => (
        <Button {...ctaItem} />
      ))}
    </Container>
  );
};

export default ModalFooter;

const Container = styled("div")`
  width: 100%;
  padding: var(--spacing-2);
  padding-bottom: var(--spacing-3);
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  gap: var(--spacing-2);

  @media (min-width: 768px) {
    padding-bottom: var(--spacing-2);
  }
`;
