import styled from 'styled-components';
import Link from 'next/link';
import {media, colors} from "@/configs/index";

export const Card = styled(Link)`
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

  &:hover {
    div {
      background-color: ${colors.primary_peach};
    }
    h3 {
      color: ${colors.primary_white};
    }
    p {
      color: ${colors.primary_white};
    }
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

  ${media.tablet} {
    padding: 108px 10px;
  }

  ${media.tablet} {
    padding: 32px 10px;
  }
`;