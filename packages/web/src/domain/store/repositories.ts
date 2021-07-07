import { TypeAction } from 'domain/providers/Action';
import { TypePluralState } from 'domain/providers/State';

export type Action = TypeAction<{
  item?: Item;
  items?: Item[];
  tags?: string;
  repository?: Item;
}>;

type TagItem = {
  id: string;
  name: string;
};

export type Item = {
  id: string;
  name: string;
  description: string;
  language: string;
  tags: TagItem[];
};

export type State = TypePluralState<Item>;
