import { Wrapper } from './ErrorMessage.styles';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <Wrapper>{children}</Wrapper>;
};
export default ErrorMessage;
