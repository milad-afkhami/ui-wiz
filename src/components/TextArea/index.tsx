import { type PropsWithChildren, forwardRef, useMemo } from "react";
import { Div } from "style-wiz";
import StyledTextArea from "./atoms/StyledTextArea";
import TextAreaLabel from "./atoms/Label";
import TextAreaMeta from "./atoms/Meta";
import TextAreaPlaceholder from "./atoms/Placeholder";
import type TextAreaProps from "./props";

const TextArea = forwardRef<HTMLDivElement, PropsWithChildren<TextAreaProps>>(
  (props, ref) => {
    const {
      name,
      label = "",
      required,
      placeholder = "",
      onChange = () => {},
      onBlur = () => {},
      onFocus = () => {},
      className = "",
      id = "",
      state,
      value,
      rows = 3,
    } = props;

    const initialValue = useMemo(() => value || "", []);

    return (
      <Div position="relative" width="100%" mb="2">
        <TextAreaLabel label={label} required={required} />
        <Div position="relative">
          <StyledTextArea
            ref={ref}
            contentEditable
            rows={rows}
            // name={name} value={value}
            className={className}
            id={id}
            onBlur={onBlur}
            onFocus={onFocus}
            onInput={(e) => {
              // @ts-ignore
              const text = e.target.outerText || e.target.textContent;
              // @ts-ignore
              onChange(e, text);
            }}
            suppressContentEditableWarning
          >
            {initialValue}
          </StyledTextArea>
          <textarea hidden value={value} name={name} />
          <TextAreaPlaceholder value={value} placeholder={placeholder} />
        </Div>
        <TextAreaMeta {...state} />
      </Div>
    );
  }
);

export default TextArea;
