import styled, {css} from 'styled-components';

import { media, colors } from '@/configs/index';

export const DescriptionSection = styled.section`
  width: 1440px;
  max-width: 100%;
  padding: 120px 165px 0;
  margin: 0 auto;

  ${media.tabletL} {
    width: 992px;
    padding: 120px 40px 0;
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
  display: flex;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  ${media.tablet} {
    flex-direction: column;
  }

  ${media.mobile} {
    border-radius: 0px;
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 50%;
  min-height: 320px;

  ${props => props.variant === 'imageLeft' && css`
    order: 1;
  `}

  ${media.tablet} {
    width: 100%;
    height: 320px;
    order: 1;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 154px 55px;
  background-color: ${colors.secondary_light_peach};

  ${props => props.variant === 'imageLeft' && css`
    order: 2;
  `}

  ${media.tablet} {
    width: 100%;
    padding: 65px 55px;
    order: 2;
  }

  ${media.mobile} {
    padding: 80px 24px;
  }
`;
