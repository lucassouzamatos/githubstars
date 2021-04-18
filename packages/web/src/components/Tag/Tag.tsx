import { Wrapper, Close } from './Tag.styles';

type TagProps = {
  children: React.ReactNode;
  close?: boolean;
};

export default function Tag({ children, close }: TagProps) {
  return (
    <Wrapper>
      {close && <Close />}
      {children}
    </Wrapper>
  );
}
