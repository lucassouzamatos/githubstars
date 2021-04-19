export type TypePluralState<T> = {
  data: T[] | unknown[];
  loading?: boolean;
  error?: string;
};

export type TypeSingleState<T> = {
  data: T;
  loading?: boolean;
  error?: string;
};

export type TypeState = TypePluralState<unknown> | TypeSingleState<unknown>;
