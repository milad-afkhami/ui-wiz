import { Div } from "style-wiz";
import {
  useRef,
  useState,
  forwardRef,
  type ChangeEvent,
  type KeyboardEventHandler,
  type PropsWithChildren,
} from "react";
import InputWrapper from "./atoms/Wrapper";
import InputMeta from "./atoms/Meta";
import StyledInput from "./atoms/Styled";
import InputHelper from "../../helpers/input";
import Adornment from "../Adornment";
import IconButton from "../IconButton";
import type InputProps from "./props";

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (props, ref) => {
    const {
      type = "text",
      name,
      label = "",
      placeholder = "",
      onChange = () => {},
      onFocus = () => {},
      onBlur = () => {},
      onSubmit,
      disabled,
      className = "",
      id,
      state,
      startAdornment,
      endAdornment,
      onClear,
      value,
      hideCaret,
      required,
      dir,
      maxLength,
      readOnly,
    } = props;

    const _id = useRef(
      id ?? `input--${Math.floor(Math.random() * 100_000).toString()}`
    );

    const [focused, setFocused] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const _value = e.target.value;

      if (maxLength && _value?.length > maxLength) return;

      if (type === "number" || type === "tel") {
        const includesString = _value?.includes(" ");

        // do nothing if user's input was not a number or included space
        if (Number.isNaN(Number(_value)) || includesString) return;
      }
      // eslint-disable-next-line consistent-return
      return onChange(e, _value);
    };

    const fieldType = ["number", "tel"].includes(type) ? type : "text";

    const inputState = InputHelper.getState({ state });

    // const initialValue = useMemo(() => value || "", []);

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      const KEYBOARD_ENTER_KEY_CODE = 13;
      if (e.keyCode === KEYBOARD_ENTER_KEY_CODE && value) {
        onSubmit?.(value);
      }
    };

    return (
      <Div width="100%">
        <Div position="relative">
          <InputWrapper
            id={_id.current}
            focused={focused}
            className={className}
            placeholder={placeholder}
            value={value}
            label={label}
            required={required}
            state={state}
            disabled={disabled}
            startAdornment={startAdornment}
          >
            <Div
              flex={["center", "center"]}
              styles={{
                "@supports (margin-inline-start: 1rem)": {
                  marginInlineStart: "var(--spacing-2)",
                },
                "@supports not (margin-inline-start: 1rem)": {
                  '[dir="ltr"] &': { marginLeft: "var(--spacing-2)" },
                  '[dir="rtl"] &': { marginRight: "var(--spacing-2)" },
                },
              }}
            >
              <Adornment icon={startAdornment} />
            </Div>
            <StyledInput
              id={_id.current}
              dir={dir}
              ref={ref}
              hideCaret={hideCaret}
              disabled={disabled}
              onBlur={(e) => {
                onBlur?.(e);
                setFocused(false);
              }}
              onFocus={(e) => {
                onFocus?.(e);
                setFocused(true);
              }}
              onKeyDown={onKeyDown}
              onChange={handleChange}
              value={value}
              type={fieldType}
              name={name}
              placeholder={placeholder}
              readOnly={readOnly}
            />
            <Div
              flex={["center", "center"]}
              className="end-adornment"
              styles={{
                "@supports (margin-inline-end: 1rem)": {
                  marginInlineEnd: "var(--spacing-2)",
                },
                "@supports not (margin-inline-end: 1rem)": {
                  '[dir="ltr"] &': { marginRight: "var(--spacing-2)" },
                  '[dir="rtl"] &': { marginLeft: "var(--spacing-2)" },
                },
              }}
            >
              <Adornment icon={endAdornment} />
            </Div>
          </InputWrapper>
          {onClear && value && !endAdornment ? (
            <Div
              position="absolute"
              height="100%"
              flex={["center"]}
              dimensions={{ top: 0, left: "var(--spacing-1)" }}
            >
              <IconButton
                className="clear-input"
                name="close"
                color="text-secondary"
                variant="text"
                onClick={onClear}
              />
            </Div>
          ) : null}
        </Div>
        <InputMeta text={inputState?.text} color={inputState?.color} />
      </Div>
    );
  }
);

Input.displayName = "Input";

export default Input;
