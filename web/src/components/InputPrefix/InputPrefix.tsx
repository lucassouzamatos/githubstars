import { Input as InputComponent } from 'components';
import { Label } from './InputPrefix.styles';

interface InputProps {
  placeholder: string;
  prefix: string;
}

export default ({ placeholder, prefix }: InputProps) => {
  return (
    <Label border="2px solid #000000">
      {prefix}
      <InputComponent
        outline="inherit"
        border="none"
        placeholder={placeholder}
      />
    </Label>
  );
};
