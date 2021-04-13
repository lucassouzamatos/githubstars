import { Input as InputComponent, Button } from 'components';
import { Wrapper } from './InputSearch.styles';

type InputSearchProps = {
  placeholder: string;
};

export default function InputSearch({ placeholder }: InputSearchProps) {
  return (
    <Wrapper>
      <InputComponent width="390px" placeholder={placeholder} />
      <Button text="search" />
    </Wrapper>
  );
}
