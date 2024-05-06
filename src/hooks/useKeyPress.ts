import { useEffect, useCallback } from "react";
import { isClient } from "../utils/isClient";

type KeyPressHook = (key: string, callback: () => void) => void;

const useKeyPress: KeyPressHook = function (key, callback) {
  const eventHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === key) callback?.();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClient()) window.addEventListener("keyup", eventHandler);
    return () => {
      if (isClient()) window.removeEventListener("keyup", eventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, callback]);
};

export default useKeyPress;
