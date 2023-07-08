import styled from 'styled-components';
import Image from 'next/image';
import { media, colors } from '@/configs/index';

export const AdvantagesSections = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 0;
  
  ${media.desktop} {
    padding: 120px 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  ${media.mobile} {
    padding: 120px 0 0;
  }
`;

export const Advantage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  ${media.desktop} {
    flex-direction: row;
    margin-bottom: 20px;
    margin-right: 0;
  }

  ${media.mobile} {
    flex-direction: column;
    margin-bottom: 0;
  }

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const AdvantageImage = styled(Image)`
  margin-bottom: 48px;

  ${media.desktop} {
    margin-bottom: 0px;
  }

  ${media.mobile} {
    margin-bottom: 48px;
  }
`;

export const AdvantageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${media.desktop} {
    margin-left: 20px;
    align-items: start;
  }

  ${media.mobile} {
    margin: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const AdvantageDescr = styled.h4`
  max-width: 440px;
  margin-top: 32px;
  color: ${colors.secondary_dark};
  text-align: center;
  font-size: 16px;
  line-height: 26px;

  ${media.desktop} {
    text-align: start;
  }

  ${media.mobile} {
    text-align: center;
  }
`;