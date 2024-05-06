import type { Maybe, Nullable } from "ts-wiz";

import type { DivProps } from "style-wiz";
import type InputProps from "../components/Input/props";

interface GetColors extends Pick<InputProps, "disabled" | "state"> {
  focused?: boolean;
}

type GetState = {
  state?: InputProps["state"];
};

export default class InputHelper {
  static getColors({ state, focused, disabled }: GetColors): {
    borderColor?: DivProps["color"];
    labelColor?: DivProps["color"];
    borderHoveredColor?: DivProps["color"];
  } {
    let borderColor: Maybe<DivProps["color"]>;
    let labelColor: Maybe<DivProps["color"]> = "text-secondary-main";
    if (state?.type === "error") {
      borderColor = `assistive-error-main`;
      labelColor = `assistive-error-main`;
    }
    let borderHoveredColor: Maybe<DivProps["color"]> = borderColor;
    if (!borderColor) {
      borderHoveredColor = "border-dark-hover";
      if (focused) borderColor = "border-dark-hover";
      else borderColor = "border-dark-main";
    }
    if (disabled) {
      borderColor = "border-light-main";
      borderHoveredColor = "border-light-main";
      labelColor = "text-disabled-main";
    }

    return { borderColor, labelColor, borderHoveredColor };
  }

  static getState({
    state,
  }: GetState): Nullable<{ text: string; color: string }> {
    if (!state?.type || !state.message) {
      return null;
    }

    return {
      text: state.message,
      color:
        state.type === "error" ? `assistive-error-main` : `text-secondary-main`,
    };
  }
}
