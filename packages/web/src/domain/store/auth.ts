import { TypeAction } from 'domain/providers/Action';
import { TypeSingleState } from 'domain/providers/State';

export type Action = TypeAction<{ user?: Item; username?: string }>;

export type Item = {
  username?: string;
};

export type State = TypeSingleState<Item>;
