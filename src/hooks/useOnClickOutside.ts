import { useEffect, type RefObject } from "react";

type ClickOutsideHookHandler = (e: Event) => void;

type ClickOutsideHook = (
  ref: RefObject<HTMLElement>,
  handler: ClickOutsideHookHandler
) => void;

/**
 * Fires handler whenever user click outside of the element that the ref param correspond to.
 * @example
 * const ref = useRef();
 * const onClickOutside = useCallback(() => doSomething(), []);
 * useOnClickOutside(ref, onClickOutside);
 */
const useOnClickOutside: ClickOutsideHook = (ref, handler) => {
  useEffect(() => {
    const listener: ClickOutsideHookHandler = (event) =>
      !ref.current || ref.current.contains(event.target as Node)
        ? null
        : handler?.(event);

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
