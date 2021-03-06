import { actionCreators } from "module/SearchModule/actions";

export type Search = {
  keyword: string;
};

type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
  ? ReturnType<T[K]>
  : never;
};
type PickActionType<T> = Unbox<ReturnTypes<T>>;
export type SearchAction = PickActionType<typeof actionCreators>;