import styled from 'styled-components';
import LogoBlack from 'assets/images/logo-black.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
`;

export const Logo = styled.div`
  display: flex;
  width: 180px;
  height: 48px;
  background-image: url(${LogoBlack});
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 70px;
  }
`;
