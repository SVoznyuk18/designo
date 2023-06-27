import styled from 'styled-components';

import {media, colors} from "@/configs/index";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;

  ${media.tablet} {
    flex-direction: row;
    height: 310px;
  }

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;

  ${media.tablet} {
    width: auto;
    min-width: 320px;
    height: 100%;
  }

  ${media.mobile} {
    width: 100%;
    min-width: auto;
    height: 320px;
  }
`;

export const CardInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  width: auto;
  background-color: ${colors.secondary_light_peach};

  &:hover {
    background-color: ${colors.primary_peach};

    h3 {
      color: ${colors.primary_white};
    }

    p {
      color: ${colors.primary_white};
    }
  }

  ${media.tablet} {
    padding: 108px 0 108px;
  }

  ${media.tablet} {
    padding: 32px 0 32px;
  }
`;


export const CardTitle = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 5px;
  color: ${colors.primary_peach};
`;

export const CardDescr = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.secondary_dark};
`;