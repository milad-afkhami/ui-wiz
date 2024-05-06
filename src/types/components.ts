import type { FunctionComponent, PropsWithChildren } from "react";
import type { Dictionary } from "ts-wiz";

export type HOCFunctionalComponent<T = Dictionary> = FunctionComponent<
  PropsWithChildren<T>
>;
