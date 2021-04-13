import { Input, Button, Tag } from 'components';
import {
  Wrapper,
  Overlay,
  Title,
  Description,
  InputTags,
  Tags,
  Header,
  ButtonClose,
} from './Modal.styles';

type ModalProps = {
  opened: boolean;
  onClose: () => void;
};

export default function Modal({ opened, onClose }: ModalProps) {
  if (!opened) {
    return null;
  }

  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Title>
            editing <strong>kubernetes</strong>
          </Title>
          <ButtonClose onClick={onClose} />
        </Header>
        <Description>
          <span>tags</span>
          <span>you could type tags separated by comma</span>
        </Description>
        <Tags>
          <Tag close>very nice! 👍</Tag>
          <Tag close>elixir 🎉</Tag>
          <Tag close>django</Tag>
        </Tags>
        <InputTags>
          <Input width="100%" placeholder="add tags" />
          <Button text="add" />
        </InputTags>
      </Wrapper>
    </Overlay>
  );
}
