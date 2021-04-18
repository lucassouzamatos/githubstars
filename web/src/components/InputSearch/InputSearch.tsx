import { Input as InputComponent, Button } from 'components';
import { useRef, useState, useEffect } from 'react';
import lodash from 'lodash';
import { Wrapper, SuggestionWrapper, InputWrapper } from './InputSearch.styles';

type InputSearchProps = {
  placeholder: string;
};

const suggestions = ['test', 'kubernetes', 'docker'];

export default function InputSearch({ placeholder }: InputSearchProps) {
  const [value, setValue] = useState<string>();
  const [focused, setFocused] = useState<boolean>();
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);

  const debounceSearch = useRef(
    lodash.throttle((debounceValue) => {
      setCurrentSuggestions(
        suggestions.filter((sug) => sug.includes(debounceValue))
      );
    }, 1000)
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
          value={value}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChange={search}
          width="390px"
          placeholder={placeholder}
        />
        <Button text="search" />
      </InputWrapper>

      {focused && Boolean(currentSuggestions.length) && (
        <SuggestionWrapper width="390px">
          {currentSuggestions.map((suggestion) => (
            <span onClick={() => setValue(suggestion)}>{suggestion}</span>
          ))}
        </SuggestionWrapper>
      )}
    </Wrapper>
  );
}
