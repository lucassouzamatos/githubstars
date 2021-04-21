import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: #000000b0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 835px;
  min-height: 330px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 4px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 18px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
  }

  span:first-child {
    font-weight: 800;
  }

  span:last-child {
    font-weight: 400;
  }
`;

export const InputTags = styled.form`
  display: flex;

  input {
    margin-right: 15px;
  }
`;

export const Tags = styled.div`
  min-height: 36px;
  display: flex;

  div {
    margin-right: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  border: 2px solid #000000;
  border-radius: 4px;
  width: 50px;
  height: 43px;
  &::after {
    content: 'X';
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
  }
`;
