import { useEffect, useState } from 'react';
import { Button, InputSearch, Table, Modal, Tag } from 'components';
import { useStore } from 'providers/store/StoreProvider';

import { Actions as RepositoriesActions } from 'store/ducks/repositories';
import {
  Container,
  Logo,
  Header,
  ContentWrapper,
  TagWrapper,
} from './Repositories.styles';

export default function Repositories() {
  const [modal, setModal] = useState({ opened: false });
  const { store, dispatch } = useStore();

  useEffect(() => {
    dispatch(RepositoriesActions.get());
  }, []);

  return (
    <Container>
      <Header>
        <Logo />
        <Button text="home" />
      </Header>

      <Modal
        onClose={() => setModal({ opened: false })}
        opened={modal.opened}
      />

      <ContentWrapper>
        <InputSearch placeholder="search by tags" />
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
            {store.repositories.data.map((repository) => (
              <tr>
                <td>{repository.name}</td>
                <td>{repository.description}</td>
                <td>{repository.language}</td>
                <td>
                  <TagWrapper>
                    {repository.tags.map((tag) => (
                      <Tag>{tag}</Tag>
                    ))}
                  </TagWrapper>
                </td>
                <td>
                  <button onClick={() => setModal({ opened: true })}>
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentWrapper>
    </Container>
  );
}
