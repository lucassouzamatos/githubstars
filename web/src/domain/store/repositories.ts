import { TypeAction } from 'domain/providers/Action';
import { TypePluralState } from 'domain/providers/State';

export type Action = TypeAction<{ item?: Item; items?: Item[] }>;

export type Item = {
  name: string;
  description: string;
  language: string;
  tags: string[];
};

export type State = TypePluralState<Item>;
