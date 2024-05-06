import { useMemo, type FC } from "react";
import { Div } from "style-wiz";
import Button from "../../Button";
import type BottomSheetProps from "../props";

type BottomSheetHeaderProps = Pick<BottomSheetProps, "cta">;

const BottomSheetFooter: FC<BottomSheetHeaderProps> = function (props) {
  const { cta } = props;

  /** Array of call to actions */
  const ctas = useMemo(() => (Array.isArray(cta) ? cta : [cta]), [cta]);

  return (
    <Div
      height="3.5rem"
      width="100%"
      border="border-light-main"
      borderSide="top"
      p="1"
      display="flex"
      gap="1"
    >
      {ctas.map((ctaItem, i) => (
        <Div key={i} width="100%" height="100%" flex={["center"]}>
          <Button block {...ctaItem} />
        </Div>
      ))}
    </Div>
  );
};

export default BottomSheetFooter;
