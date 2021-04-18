export type TypePluralState<T> = {
  data: T[] | unknown[];
};

export type TypeSingleState<T> = {
  data: T;
};

export type TypeState = TypePluralState<unknown> | TypeSingleState<unknown>;
