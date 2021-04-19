import { Actions as RepositoryActions } from 'store/ducks/repositories';
import request from 'adapters/request';

export async function get(payload, dispatch) {
  const response = await request.get('/favorites');
  const json = await response.json();

  const items = transformItems(json.data);
  dispatch(RepositoryActions.set(items));
}

type RepositoryResponseItem = {
  repository: {
    name: string;
    description: string;
    language: string;
  };
  tags: [];
};

const transformItems = (items: RepositoryResponseItem[]) => {
  return items.map((item) => ({
    name: item.repository.name,
    description: item.repository.description,
    language: item.repository.language,
    tags: item.tags,
  }));
};
