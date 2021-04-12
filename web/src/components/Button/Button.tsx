import { Wrapper } from './Button.styles';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Button;
