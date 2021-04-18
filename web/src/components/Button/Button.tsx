import { InputHTMLAttributes } from 'react';
import { Wrapper } from './Button.styles';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  width?: string;
  next?: boolean;
}

const Button = ({ next, text, width, type, ...props }: ButtonProps) => {
  return (
    <Wrapper type={type} next={next} width={width} {...props}>
      {text}
    </Wrapper>
  );
};

export default Button;
