import styled, { css } from 'styled-components';
import { width, WidthProps } from 'styled-system';

type WrapperProps = WidthProps & {
  next?: boolean;
};

export const Wrapper = styled.button<WrapperProps>`
  ${width}
  height: 43px;
  background: #000000;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  padding: 0 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  ${(props) =>
    props.next &&
    css`
      &:after {
        margin-left: 10px;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 10px solid #ffffff;
        border-bottom: 5px solid transparent;
      }
    `}
`;
