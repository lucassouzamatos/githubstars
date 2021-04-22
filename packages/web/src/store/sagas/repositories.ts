import { Actions as RepositoryActions } from 'store/ducks/repositories';
import request from 'adapters/request';
import unique from 'utils/unique';

export async function removeTag(payload, dispatch) {
  const response = await request.post('/tags/attach', {
    favorite_id: payload.repository.id,
    tags: payload.repository.tags
      .map((tag) => tag.name)
      .filter((tag) => tag !== payload.tag)
      .join(','),
  });

  const json = await response.json();
  dispatch(RepositoryActions.update(transformItem(json.favorite)));
}

export async function insertTags(payload, dispatch) {
  const current = payload.repository.tags.map((tag) => tag.name);
  const tags = payload.tags.split(',');

  const response = await request.post('/tags/attach', {
    favorite_id: payload.repository.id,
    tags: unique([...current, ...tags]).join(','),
  });
  const json = await response.json();
  dispatch(RepositoryActions.update(transformItem(json.favorite)));
}

export async function get(payload, dispatch) {
  try {
    const response = await request.get('/favorites');
    const json = await response.json();

    const items = transformItems(json.data);
    dispatch(RepositoryActions.set(items));
  } catch {
    dispatch(RepositoryActions.set([]));
  }
}

type RepositoryResponseItem = {
  id: string;
  repository: {
    name: string;
    description: string;
    language: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
};

const transformItem = (item: RepositoryResponseItem) => ({
  id: item.id,
  name: item.repository.name,
  description: item.repository.description,
  language: item.repository.language,
  tags: item.tags,
});

const transformItems = (items: RepositoryResponseItem[]) =>
  items.map(transformItem);
