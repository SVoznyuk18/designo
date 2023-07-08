import styled, {css} from 'styled-components';

import { media, colors } from '@/configs/index';

export const Main = styled.section`
  width: 1440px;
  max-width: 100%;
  padding: 0 165px 0;
  margin: 0 auto;

  ${media.tabletL} {
    width: 992px;
    padding: 0 40px 0;
  }

  ${media.mobile} {
    width: 576px;
    padding: 0;
  }

  ${media.mobileS} {
    width: 375px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  ${props => props.variant === 'withImg' && css `
    display: flex;

    ${media.tablet} {
      flex-direction: column;
    }
  `}

  ${media.mobile} {
    border-radius: 0px;
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 50%;
  height: 480px;

  ${media.tablet} {
    width: 100%;
    height: 320px;
    order: 1;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 64px;
  background-color: ${colors.primary_peach};

  ${media.mobile} {
    padding: 105px 24px;
  }

  ${props => props.variant === 'withImg' && css `
    padding: 100px 55px 0px;
    width: 50%;

    ${media.tablet} {
      width: 100%;
      padding: 64px 55px;
      order: 2;
    }

    ${media.mobile} {
      padding: 80px 24px;
    }
  `}
`;

export const SubTitle = styled.h2`
  color: ${colors.primary_white};
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
  text-align: center;

  ${props => props.variant === 'withImg' && css `
    text-align: start;
  `}

  ${media.mobile} {
    font-size: 15px;
    line-height: 25px;
  }
`;