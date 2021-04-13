import { Input as InputComponent } from 'components';
import { Label } from './InputPrefix.styles';

interface InputProps {
  placeholder: string;
  prefix: string;
  width: string;
}

export default ({ width, placeholder, prefix }: InputProps) => {
  return (
    <Label width={width} border="2px solid #000000">
      {prefix}
      <InputComponent
        width="100%"
        outline="inherit"
        border="none"
        placeholder={placeholder}
      />
    </Label>
  );
};
