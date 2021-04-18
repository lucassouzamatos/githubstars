import { Button, InputPrefix } from 'components';
import { useStore } from 'providers/store/StoreProvider';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Actions as AuthActions } from 'store/ducks/auth';
import {
  WrapperText,
  WrapperForm,
  Container,
  Logo,
  MainText,
  SecondaryText,
} from './Main.styles';

type FormData = {
  username: string;
};

export default function Main() {
  const { register, handleSubmit } = useForm<FormData>();
  const { store, dispatch } = useStore();

  const onSubmit = handleSubmit(({ username }) => {
    dispatch(AuthActions.sync('username'));
  });

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

      <WrapperForm onSubmit={onSubmit}>
        <InputPrefix
          width="100%"
          prefix="https://github.com/"
          placeholder="username"
          {...register('username')}
        />
        <Button type="submit" next width="100%" text="get repositories" />
      </WrapperForm>
    </Container>
  );
}
