import { Button, InputSearch, Table } from 'components';
import { Container, Logo, Header, ContentWrapper } from './Repositories.styles';

export default function Repositories() {
  return (
    <Container>
      <Header>
        <Logo />
        <Button text="home" />
      </Header>

      <ContentWrapper>
        <InputSearch placeholder="search by tags" />
        <Table>
          <thead>
            <tr>
              <th>repository</th>
              <th>description</th>
              <th>language</th>
              <th>tags</th>
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
                  <td>tags</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ContentWrapper>
    </Container>
  );
}
