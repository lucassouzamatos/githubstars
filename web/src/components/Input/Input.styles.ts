import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';
import { outline, OutlineProps } from 'components/system';

type InputProps = BorderProps & OutlineProps;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 43px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 15px;
  ${outline}
  ${border}
  
  ::placeholder {
    color: #9c9c9c;
  }
`;
