import { Input, Button, Tag } from 'components';
import { useForm } from 'react-hook-form';
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

type DescriptionProps = {
  title?: string;
  subtitle?: string;
};

type TagProps = {
  id: string;
  name: string;
};

type ModalProps = {
  onClose: () => void;
  onCreateTags: (tags: string) => void;
  onRemoveTag: (tag: string) => void;
  opened: boolean;
  title: string;
  description?: DescriptionProps;
  tags?: TagProps[];
};

type FormData = {
  tags: string;
};

export default function Modal({
  onClose,
  onRemoveTag,
  onCreateTags,
  opened,
  title,
  description,
  tags = [],
}: ModalProps) {
  if (!opened) return null;

  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    onCreateTags(data.tags);
    reset();
  });

  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <ButtonClose onClick={onClose} />
        </Header>
        <Description>
          {description?.title && <span>{description?.title}</span>}
          {description?.subtitle && <span>{description?.subtitle}</span>}
        </Description>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag.id} onRemove={() => onRemoveTag(tag.name)} close>
              {tag.name}
            </Tag>
          ))}
        </Tags>
        <InputTags onSubmit={onSubmit}>
          <Input {...register('tags')} width="100%" placeholder="add tags" />
          <Button text="add" />
        </InputTags>
      </Wrapper>
    </Overlay>
  );
}
