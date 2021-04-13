import styled from 'styled-components';
import { width, WidthProps } from 'styled-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SuggestionWrapper = styled.div<WidthProps>`
  ${width}
  display: flex;
  margin-top: 5px;
  border-radius: 4px;
  border: 2px solid #d8d8d8;
  flex-direction: column;
  position: absolute;
  top: 50px;
  background: #ffffff;

  > span {
    padding: 10px 17px;
    font-weight: 700;
    color: #9c9c9c;
    font-size: 14px;

    &:hover {
      background: #f3f3f3;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;

  > input {
    margin-right: 15px;
  }
`;
