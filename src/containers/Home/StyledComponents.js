import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const MainSection = styled.main`
  width: 1440px;
  max-width: 100%;
  padding: 0 165px;
  margin: 0 auto;

  ${media.tabletL} {
    width: 992px;
    padding: 0 40px;
  }

  ${media.mobile} {
    width: 576px;
    padding: 0;
  }

  ${media.mobileS} {
    width: 375px;
    padding: 0;
  }
`;

export const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 640px;
  padding: 145px 95px 0;
  background-color: ${colors.primary_peach};
  border-radius: 15px;
  z-index: -1;

  ${media.tablet} {
    padding: 60px 0 0 0;
    align-items: center;
  }

  ${media.mobile} {
    padding: 80px 24px 0;
    border-radius: 0px;
  }
`;

export const Title = styled.h1`
  max-width: 540px;
  color: #FFF;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  
  ${media.tablet} {
    text-align: center;
  }
  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const SubTitle = styled.h2`
  max-width: 450px;
  color: #FFF;
  font-size: 16px;
  line-height: 26px;
  
  ${media.tablet} {
    text-align: center;
  }
  ${media.mobile} {
    font-size: 15px;
    line-height: 25px;
  }
`;