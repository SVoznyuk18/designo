import styled, {css} from 'styled-components';
import Image from 'next/image';
import {media, colors} from "@/configs/index";

export const Container = styled.div`
  position: relative;
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
    padding: 0 24px;
  }

  ${media.mobileS} {
    width: 375px;
    padding: 0 24px;
  }
`;

export const Title = styled.h1`
  width: ${props => props.width || '100%'};
  color: ${colors.primary_white};
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  text-align: ${props => props.textAlign || 'center'};
  margin-bottom: ${props => props.marginB};

  ${media.tablet} {
    text-align: center;
  }

  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
  }

  ${props => props.projectCardTitle && css`
    margin-bottom: ${props => props.marginB};
    text-align: center;
    font-size: 20px !important;
    line-height: 26px !important;
    color: ${colors.primary_peach};
  `}

  ${props => props.coutryCardTitle && css`
    margin-bottom: ${props => props.marginB};
    color: ${colors.secondary_dark};
    text-align: center;
    font-size: 20px !important;
    line-height: 26px !important;
    text-transform: uppercase;
  `}

  ${props => props.advantageTitle && css`
    color: ${colors.secondary_dark};
    text-align: center;
    font-size: 20px !important;
    line-height: 26px !important;
    ${media.desktop} {
      text-align: start;
    }
    ${media.mobile} {
      text-align: center;
    }
  `}

  ${props => props.locationTitle && css`
    color: ${colors.primary_peach};
    font-size: 40px !important;
    line-height: 48px !important;
    margin-bottom: ${props => props.marginB};
    text-align: ${props => props.textAlign || 'center'};

    ${media.mobile} {
      text-align: center;
    }
  `}

  ${props => props.widjetTitle && css`
    font-size: 40px !important;
    line-height: 40px !important;
    max-width: 270px;
    margin-bottom: 20px;
    text-align: ${props => props.textAlign || 'center'};

    ${media.desktop} {
      text-align: center;
    }
  `}
`;