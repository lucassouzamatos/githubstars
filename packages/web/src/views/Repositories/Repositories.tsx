import { useEffect, useState } from 'react';
import { Button, InputSearch, Table, Modal, Tag } from 'components';
import { SuggestionProps } from 'components/InputSearch';
import { useStore } from 'providers/store/StoreProvider';
import { Item as RepositoryProps } from 'domain/store/repositories';
import { Actions as AuthActions } from 'store/ducks/auth';
import { Actions as RepositoriesActions } from 'store/ducks/repositories';
import {
  Container,
  Logo,
  Header,
  ContentWrapper,
  TagWrapper,
} from './Repositories.styles';

export default function Repositories() {
  const [modal, setModal] = useState<{
    opened: boolean;
    repository?: RepositoryProps;
  }>({ opened: false });

  const closeModal = () => setModal({ opened: false });

  const { store, dispatch } = useStore();

  const [filter, setFilter] = useState<string>();

  useEffect(() => {
    if (!store.repositories.data.length && store.auth.data?.token)
      dispatch(RepositoriesActions.get());
  }, []);

  useEffect(() => {
    if (modal.repository) {
      const repository = store.repositories.data.find(
        (value) => (value as RepositoryProps).id === modal.repository?.id
      );

      setModal({
        opened: modal.opened,
        repository: repository as RepositoryProps,
      });
    }
  }, [store.repositories.data]);

  const logout = () => {
    dispatch(AuthActions.logout());
  };

  const createTags = (tags: string) => {
    if (modal.repository) {
      dispatch(RepositoriesActions.insertTags(tags, modal.repository));
    }
  };

  const removeTag = (tag: string) => {
    if (modal.repository) {
      dispatch(RepositoriesActions.removeTag(tag, modal.repository));
    }
  };

  const applyFilter = (data: RepositoryProps[]): RepositoryProps[] => {
    if (!filter) return data;

    return data.reduce((accumulator, repository) => {
      const has = repository.tags.some((tag) => tag.name.includes(filter));
      if (has) accumulator.push(repository);

      return accumulator;
    }, [] as RepositoryProps[]);
  };

  return (
    <Container>
      <Header>
        <Logo />
        <Button onClick={logout} text="home" />
      </Header>

      <Modal
        onRemoveTag={removeTag}
        onCreateTags={createTags}
        onClose={closeModal}
        title={`editing ${modal.repository?.name}`}
        description={{
          title: 'tags',
          subtitle: 'you could type tags separated by comma',
        }}
        tags={modal.repository?.tags}
        opened={modal.opened}
      />

      <ContentWrapper>
        <InputSearch
          data={store.repositories.data as SuggestionProps[]}
          onSearch={setFilter}
          placeholder="search by tags"
        />
        <Table>
          <thead>
            <tr>
              <th>repository</th>
              <th>description</th>
              <th>language</th>
              <th>tags</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            {applyFilter(store.repositories.data as RepositoryProps[]).map(
              (repository) => (
                <tr key={repository.id}>
                  <td>{repository.name}</td>
                  <td>{repository.description}</td>
                  <td>{repository.language}</td>
                  <td>
                    <TagWrapper>
                      {repository.tags.map((tag) => (
                        <Tag key={tag.id}>{tag.name}</Tag>
                      ))}
                    </TagWrapper>
                  </td>
                  <td>
                    <button
                      onClick={() => setModal({ opened: true, repository })}
                    >
                      edit
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </ContentWrapper>
    </Container>
  );
}
