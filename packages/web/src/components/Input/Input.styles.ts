import styled from 'styled-components';
import { border, BorderProps, width, WidthProps } from 'styled-system';
import { outline, OutlineProps } from 'components/system';

type InputProps = BorderProps & OutlineProps & WidthProps;

export const InputWrapper = styled.input<InputProps>`
  height: 43px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 15px;
  ${outline}
  ${border}
  ${width}

  ::placeholder {
    color: #9c9c9c;
  }
`;
