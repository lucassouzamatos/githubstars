import { Input } from './Input.styles';

interface InputProps {
  placeholder: string;
  border?: string;
  outline?: string;
  width?: string;
}

export default ({
  outline = 'auto',
  border = '2px solid #000000',
  width,
  placeholder,
}: InputProps) => {
  return (
    <Input
      width={width}
      outline={outline}
      border={border}
      placeholder={placeholder}
    />
  );
};
