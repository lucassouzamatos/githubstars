import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 27px;
  border: 0.5px solid #000000;
  border-radius: 4px;
  padding: 3px 7px;
`;

export const Close = styled.button`
  height: 14px;
  width: 14px;
  background: #000000;
  display: flex;
  position: absolute;
  top: -7px;
  right: -7px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &::after {
    content: 'x';
    color: #ffffff;
    line-height: 6px;
  }
`;
