import { Wrapper } from './Button.styles';

interface ButtonProps {
  text: string;
  width?: string;
  next?: boolean;
}

const Button = ({ next, text, width }: ButtonProps) => {
  return (
    <Wrapper next={next} width={width}>
      {text}
    </Wrapper>
  );
};

export default Button;
