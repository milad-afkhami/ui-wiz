import { createPortal } from "react-dom";
import { isClient } from "./isClient";
import type { PropsWithChildren, ReactPortal } from "react";
import type { Nullable } from "ts-wiz";

// TODO the return type should be changed

type IsomorphicPortal = (
  children: PropsWithChildren["children"],
  selector?: string
) => Nullable<ReactPortal>;

const isomorphicPortal: IsomorphicPortal = function (children, selector) {
  if (!isClient()) return null;

  const destEl = selector ? document.querySelector(selector) : null;

  return createPortal(children, destEl || document.body);
};

export default isomorphicPortal;
