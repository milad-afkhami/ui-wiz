import { useCallback, useRef, useState } from "react";
import camelCase from "../utils/camelcase";

type EnhancedDelayedRenderHook = (
  state: boolean,
  options?: { enterDelay?: number; exitDelay?: number; name?: string }
) => { [x: string]: boolean };
/** A hook to use **useDelayedRender** hook from `use-delayed-render` package in a leaner approach. */
const useEnhancedDelayedRender: EnhancedDelayedRenderHook = function (
  state,
  options = {
    name: "",
  }
) {
  const { mounted, rendered } = useDelayedRender(state, { ...options });

  return {
    [camelCase(`${options.name}-mounted`)]: mounted,
    [camelCase(`${options.name}-rendered`)]: rendered,
  };
};
export default useEnhancedDelayedRender;

type Options = {
  enterDelay?: number;
  exitDelay?: number;
  onUnmount?: () => void;
};

const useDelayedRender = (active: boolean = false, options: Options = {}) => {
  const [, force] = useState<unknown>();
  const mounted = useRef(active);
  const rendered = useRef(active);
  const renderTimer = useRef<NodeJS.Timeout | null>(null);
  const unmountTimer = useRef<NodeJS.Timeout | null>(null);
  const prevActive = useRef(active);

  const recalculate = useCallback(() => {
    const { enterDelay = 1, exitDelay = 0 } = options;

    if (prevActive.current) {
      // Mount immediately
      mounted.current = true;
      if (unmountTimer.current) clearTimeout(unmountTimer.current);

      if (enterDelay <= 0) {
        // Render immediately
        rendered.current = true;
      } else {
        if (renderTimer.current) return;

        // Render after a delay
        renderTimer.current = setTimeout(() => {
          rendered.current = true;
          renderTimer.current = null;
          force({});
        }, enterDelay);
      }
    } else {
      // Immediately set to unrendered
      rendered.current = false;

      if (exitDelay <= 0) {
        mounted.current = false;
      } else {
        if (unmountTimer.current) return;

        // Unmount after a delay
        unmountTimer.current = setTimeout(() => {
          mounted.current = false;
          unmountTimer.current = null;
          force({});
        }, exitDelay);
      }
    }
  }, [options]);

  // When the active prop changes, need to re-calculate
  if (active !== prevActive.current) {
    prevActive.current = active;
    // We want to do this synchronously with the render, not in an effect
    // this way when active → true, mounted → true in the same pass
    recalculate();
  }

  return {
    mounted: mounted.current,
    rendered: rendered.current,
  };
};
