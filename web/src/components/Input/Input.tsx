import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { InputWrapper } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  border?: string;
  outline?: string;
  width?: string;
}

const Input = (
  {
    outline = 'auto',
    border = '2px solid #000000',
    width,
    value,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <InputWrapper
    ref={ref}
    value={value}
    width={width}
    outline={outline}
    border={border}
    {...props}
  />
);

export default forwardRef<HTMLInputElement, InputProps>(Input);
