import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { Input as InputComponent } from 'components';
import { Label } from './InputPrefix.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix: string;
  width?: string;
}

const InputPrefix = (
  { width, prefix, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <Label width={width} border="2px solid #000000">
    {prefix}
    <InputComponent
      ref={ref}
      width="100%"
      outline="inherit"
      border="none"
      {...props}
    />
  </Label>
);

export default forwardRef<HTMLInputElement, InputProps>(InputPrefix);
