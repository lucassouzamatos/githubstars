import { Input as InputComponent, Button } from 'components';
import { useRef, useState, useEffect } from 'react';
import lodash from 'lodash';
import unique from 'utils/unique';
import { Wrapper, SuggestionWrapper, InputWrapper } from './InputSearch.styles';

type InputSearchProps = {
  onSearch: (value: string) => void;
  placeholder: string;
  data: TagSuggestionProps[];
};

export type TagProps = { name: string; id: string };

export type TagSuggestionProps = {
  tags: TagProps[];
};

export default function InputSearch({
  placeholder,
  onSearch,
  data,
}: InputSearchProps) {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>();
  const [currentSuggestions, setCurrentSuggestions] = useState<TagProps[]>([]);

  const hydrateSuggestions = (debounceValue: string): TagProps[] => {
    const result = (data as TagSuggestionProps[])
      .reduce(
        (accumulator, repository) => [...accumulator, ...repository.tags],
        [] as TagProps[]
      )
      .filter((sug) => sug.name.includes(debounceValue));

    return unique(result, (map) => map.name);
  };

  const debounceSearch = useRef(
    lodash.throttle((debounceValue) => {
      setCurrentSuggestions(hydrateSuggestions(debounceValue));
    }, 1000)
  );

  useEffect(() => debounceSearch.current(value), [value]);

  const search = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    if (e && e.target) {
      setValue(e.target.value);
    }
  };

  const submitSearch = (target: string = value) => {
    setValue(target);
    onSearch(target);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputComponent
          value={value}
          onBlur={() => setTimeout(() => setFocused(false), 100)}
          onFocus={() => setFocused(true)}
          onChange={search}
          width="390px"
          placeholder={placeholder}
        />
        <Button onClick={() => submitSearch()} text="search" />
      </InputWrapper>

      {focused && Boolean(currentSuggestions.length) && (
        <SuggestionWrapper width="390px">
          {currentSuggestions.map((suggestion) => (
            <span
              key={suggestion.id}
              onClick={() => submitSearch(suggestion.name)}
            >
              {suggestion.name}
            </span>
          ))}
        </SuggestionWrapper>
      )}
    </Wrapper>
  );
}
