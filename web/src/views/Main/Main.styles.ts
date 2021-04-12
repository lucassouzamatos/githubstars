import styled from 'styled-components';
import LogoWhite from 'assets/images/logo-white.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const WrapperText = styled.div`
  display: flex;
  background: #000000;
  padding: 90px;
  max-width: 60%;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.span`
  color: #ffffff;
`;

export const MainText = styled(Text)`
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 20px;
`;

export const SecondaryText = styled(Text)`
  font-size: 32px;
  line-height: 41px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  width: 180px;
  height: 48px;
  background-image: url(${LogoWhite});
`;

export const WrapperForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 175px;

  > button {
    margin-top: 10px;
  }
`;
