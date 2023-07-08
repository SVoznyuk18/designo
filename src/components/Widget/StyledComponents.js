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