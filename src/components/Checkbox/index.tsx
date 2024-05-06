import { Div, Text } from "style-wiz";
import { styled } from "goober";
import type { ChangeEvent } from "react";

export interface CheckboxProps {
  checked: boolean;
  name: string;
  disabled?: boolean;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Checkbox = ({
  name,
  label,
  checked = false,
  disabled = false,
  onChange = () => {},
}: CheckboxProps) => {
  let bg = "bg-primary-main";

  if (checked) {
    if (disabled) bg = "border-light-main";
    else bg = "brand-primary-main";
  }

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e, e.target.checked)}
        hidden
      />

      <label htmlFor={name}>
        <Container checked={checked} disabled={disabled}>
          <Div
            width="20px"
            height="20px"
            border="border-light-main"
            curve="xsm"
            flex={["center", "center"]}
            bg={bg}
          >
            <Text color="bg-primary-main" size="lg" bold>
              &#10003;
            </Text>
          </Div>

          <Div flex={["center", "center"]}>
            <Text size="sm" color={disabled ? "text-disabled-main" : undefined}>
              {label}
            </Text>
          </Div>
        </Container>
      </label>
    </div>
  );
};

type ContainerProps = Pick<CheckboxProps, "disabled" | "checked">;
const Container = styled<ContainerProps>("div")`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: start;
  gap: var(--spacing-2);
`;
export default Checkbox;
