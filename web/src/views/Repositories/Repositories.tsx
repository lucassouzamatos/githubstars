import { Button, InputSearch, Table, Modal, Tag } from 'components';
import { useState } from 'react';
import {
  Container,
  Logo,
  Header,
  ContentWrapper,
  TagWrapper,
} from './Repositories.styles';

export default function Repositories() {
  const [modal, setModal] = useState({ opened: false });

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
            {Array(20)
              .fill(0)
              .map(() => (
                <tr>
                  <td>kubernetes</td>
                  <td>
                    Kubernetes, also known as K8s, is an open source system for
                    managingcontainerized applications across multiple hosts
                  </td>
                  <td>kubernetes</td>
                  <td>
                    <TagWrapper>
                      <Tag>test 🎉</Tag>
                      <Tag>test 🎉</Tag>
                      <Tag>test 🎉</Tag>
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
