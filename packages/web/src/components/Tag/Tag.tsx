import { Wrapper, Close } from './Tag.styles';

type TagProps = {
  children: React.ReactNode;
  close?: boolean;
  onRemove?: () => void;
};

export default function Tag({ children, close, onRemove }: TagProps) {
  return (
    <Wrapper>
      {close && <Close onClick={onRemove} />}
      {children}
    </Wrapper>
  );
}
