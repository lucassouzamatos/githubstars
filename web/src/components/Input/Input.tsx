import { Input } from './Input.styles';

interface InputProps {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  border?: string;
  outline?: string;
  width?: string;
  value?: string;
}

export default ({
  outline = 'auto',
  border = '2px solid #000000',
  width,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  value,
}: InputProps) => {
  return (
    <Input
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      width={width}
      outline={outline}
      border={border}
      placeholder={placeholder}
    />
  );
};
