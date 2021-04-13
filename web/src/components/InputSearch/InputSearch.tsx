import { Input as InputComponent, Button } from 'components';
import { useRef, useState, useEffect } from 'react';
import lodash from 'lodash';
import { Wrapper, SuggestionWrapper, InputWrapper } from './InputSearch.styles';

type InputSearchProps = {
  placeholder: string;
};

export default function InputSearch({ placeholder }: InputSearchProps) {
  const [value, setValue] = useState<string>();
  const [focused, setFocused] = useState<boolean>();

  const debounceSearch = useRef(
    lodash.throttle((debounceValue) => console.log(debounceValue), 1000)
  );

  useEffect(() => debounceSearch.current(value), [value]);

  const search = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    if (e && e.target) {
      setValue(e.target.value);
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputComponent
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChange={search}
          width="390px"
          placeholder={placeholder}
        />
        <Button text="search" />
      </InputWrapper>

      {focused && (
        <SuggestionWrapper width="390px">
          <span>sugestão</span>
          <span>sugestão</span>
          <span>sugestão</span>
          <span>sugestão</span>
          <span>sugestão</span>
        </SuggestionWrapper>
      )}
    </Wrapper>
  );
}
