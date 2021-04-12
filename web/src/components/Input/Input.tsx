import { Input } from './Input.styles';

interface InputProps {
  placeholder: string;
  border?: string;
  outline?: string;
}

export default ({
  outline = 'auto',
  border = '2px solid #000000',
  placeholder,
}: InputProps) => {
  return <Input outline={outline} border={border} placeholder={placeholder} />;
};
