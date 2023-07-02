import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const WidgetSection = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 240px;
  padding: 72px 96px;
  background-color: ${colors.primary_peach};
  border-radius: 15px;
  overflow: hidden;
  margin: 0 165px;

  ${media.tabletL} {
    margin: 0 40px;
  }

  ${media.desktop} {
    padding: 55px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${media.tablet} {
    bottom: 420px;
  }

  ${media.mobile} {
    margin: 0 24px;
    padding: 55px 24px;
  }

  ${media.mobile} {
    bottom: 638px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.desktop} {
    justify-content: center;
    align-items: center;
  }
`;

export const WidgetTitle = styled.h2`
  color: ${colors.primary_white};
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  max-width: 270px;
  margin-bottom: 20px;

  ${media.desktop} {
    text-align: center;
  }
`;

export const WidgetSubTitle = styled.h3`
  color: ${colors.primary_white};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  max-width: 460px;

  ${media.desktop} {
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  min-width: 150px;
  height: 55px;
  border-radius: 8px;
  background-color: ${colors.primary_white};
  color: ${colors.secondary_dark};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`;