import { Button, InputPrefix } from 'components';
import {
  WrapperText,
  WrapperForm,
  Container,
  Logo,
  MainText,
  SecondaryText,
} from './Main.styles';

export default function Main() {
  return (
    <Container>
      <WrapperText>
        <Logo />
        <MainText>
          You as a Github user, who is always looking for new projects and
          enjoying those who are interesting
        </MainText>
        <SecondaryText>
          You would like to be able to add a label or tag to a repository so
          that it can be found later
        </SecondaryText>
      </WrapperText>

      <WrapperForm>
        <InputPrefix
          width="100%"
          prefix="https://github.com/"
          placeholder="test"
        />
        <Button next width="100%" text="get repositories" />
      </WrapperForm>
    </Container>
  );
}
