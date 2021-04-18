export interface TypeAction<P> {
  type: string;
  payload: P;
}

export interface TypeActionWithType<P, T extends string> extends TypeAction<P> {
  type: T;
  payload: P;
}
