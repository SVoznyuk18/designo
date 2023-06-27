import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const Main = styled.main`
  width: 1440px;
  max-width: 100%;
  padding: 0 165px 160px;
  margin: 0 auto;

  ${media.tabletL} {
    width: 992px;
    padding: 0 40px 120px;
  }

  ${media.mobile} {
    width: 576px;
    padding: 0 0 95px;
  }

  ${media.mobileS} {
    width: 375px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 64px;
  background-color: ${colors.primary_peach};
  border-radius: 15px;

  ${media.mobile} {
    padding: 105px 24px;
    border-radius: 0px;
  }
`

export const Title = styled.h1`
  color: ${colors.primary_white};
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const SubTitle = styled.h2`
  color: ${colors.primary_white};
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
  text-align: center;

  ${media.mobile} {
    font-size: 15px;
    line-height: 25px;
  }
`;