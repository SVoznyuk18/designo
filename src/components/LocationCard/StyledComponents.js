import styled, {css} from 'styled-components';

import { media, colors } from '@/configs/index';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  ${media.desktop} {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 120px;
  }

  ${media.mobile} {
    margin-bottom: 30px;
  }
`;

export const WrapperInfo = styled.div`
  width: 730px;
  margin-right: 30px;
  padding: 85px 40px;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.secondary_light_peach};

  ${props => props.variant === 'imageLeft' && css`
    order: 2;
    margin-left: 30px;
    margin-right: 0px;
  `}

  ${media.desktop} {
    padding: 85px 95px;
    width: 100%;
    margin-right: 0px;
    margin-top: 30px;
    order: 2;

    ${props => props.variant === 'imageLeft' && css`
      margin-left: 0px;
      margin-right: 30px;
    `}
  }

  ${media.tablet} {
    padding: 85px 40px;
  }

  ${media.mobile} {
    padding: 45px 0px;
    margin-top: 0px;
    border-radius: 0px;
  }
`;

export const Title = styled.h2`
  color: ${colors.primary_peach};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 24px;

  ${media.mobile} {
    text-align: center;
  }
`;

export const ContactsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.desktop} {
    justify-content: flex-start;
  }

  ${media.mobile} {
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  min-width: 350px;
  border-radius: 15px;
  overflow: hidden;

  ${props => props.variant === 'imageLeft' && css`
    order: 1;
  `}

  ${media.desktop} {
    width: 100%;
    height: 325px;
  }

  ${media.mobile} {
    border-radius: 0px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-width: 210px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  p {
    color: ${colors.secondary_dark};
    font-size: 16px;
    line-height: 26px;
    opacity: 0.5;
    font-weight: 300; 

    a {
      color: ${colors.secondary_dark};
    }
  }

  ${media.mobile} {
    margin: 0 0 32px 0;
    align-items: center;
  }
`;

export const ContactTitle = styled.h3`
  color: ${colors.secondary_dark};
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;