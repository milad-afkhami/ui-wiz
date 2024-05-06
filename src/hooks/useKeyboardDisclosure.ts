import { useCallback, useEffect, useRef, useState } from "react";
import useToggle from "./useToggle";
import { isClient } from "../utils/isClient";
import type { Nullable } from "ts-wiz";

type WindowHeight = {
  screen?: Nullable<number>;
  visual?: Nullable<number>;
};

type KeyboardDisclosureHook = (
  defaultValue?: boolean,
  minKeyboardHeight?: number
) => [boolean, WindowHeight];

const useKeyboardDisclosure: KeyboardDisclosureHook = function (
  defaultValue,
  minKeyboardHeight = 300
) {
  const [isKeyboardOpen, toggleKeyboard] = useToggle(defaultValue);

  const initialValue: WindowHeight = { screen: null, visual: null };
  const [height, setHeight] = useState<WindowHeight>(initialValue);

  const _isKeyboardOpenRef = useRef(isKeyboardOpen);

  const _supports = useRef<boolean>(
    Boolean(isClient() && window.visualViewport && window.visualViewport.height)
  );

  const getHeight = useCallback((): WindowHeight => {
    if (!isClient()) return {};
    const screenHeight = window.screen.height;
    const visualHeight = window.visualViewport?.height;
    return { screen: screenHeight, visual: visualHeight };
  }, []);

  const keyBoardDisclosureChange = (
    screenHeight: number,
    visualHeight: number
  ) => {
    const newState = screenHeight - visualHeight > minKeyboardHeight;

    if (_isKeyboardOpenRef.current !== newState) {
      toggleKeyboard();
      _isKeyboardOpenRef.current = newState;
    }
    return newState;
  };

  const listener = useCallback(() => {
    if (!_supports) return false;

    const { screen: screenHeight, visual: visualHeight } = getHeight();

    if (!visualHeight || !screenHeight) return false;

    if (screenHeight !== height.screen || visualHeight !== height.visual) {
      setHeight({ screen: screenHeight, visual: visualHeight });
    }

    return keyBoardDisclosureChange(screenHeight, visualHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!_supports) {
      return undefined;
    }
    const { screen, visual } = getHeight();
    setHeight({ screen, visual });

    window.visualViewport?.addEventListener("resize", listener);
    return () => window.visualViewport?.removeEventListener("resize", listener);
  }, []);

  return [isKeyboardOpen, height];
};

export default useKeyboardDisclosure;
