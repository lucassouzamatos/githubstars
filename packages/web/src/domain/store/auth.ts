import { TypeAction } from 'domain/providers/Action';
import { TypeSingleState } from 'domain/providers/State';

export type Action = TypeAction<{
  user?: Item;
  username?: string;
  loading?: boolean;
  error?: string;
}>;

export type Item = {
  token?: string;
};

export type State = TypeSingleState<Item>;
