import { Wrapper } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  width?: string;
  next?: boolean;
}

const Button = ({ next, text, width, type }: ButtonProps) => {
  return (
    <Wrapper type={type} next={next} width={width}>
      {text}
    </Wrapper>
  );
};

export default Button;
