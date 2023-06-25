import styled from 'styled-components';

import {colors, media} from '@/configs/index';

export const FooterSection = styled.footer`
  width: 100%;    
  display: flex;
  align-items: center;
  padding: 144px 0px 72px;
  background-color: ${colors.primary_black};

  ${media.tablet} {
    padding: 165px 0px 80px;
  }

  ${media.mobile} {
    padding: 255px 0px 65px;
  }
`;

export const FooterTopContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 40px);
    width: 100%;
    height: 1px;
    background-color: ${colors.primary_white};
    opacity: 0.5;

    ${media.mobile} {
      top: 60px;
    }
  }

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;

  ${media.mobile} {
    margin: 0 0 65px 0;
  }
`;

export const LogoTitle = styled.span`
  margin-left: 16px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${colors.primary_white};
`;

export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;

  ${media.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;

  ${media.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: ${colors.primary_white};
    font-size: 16px;
    line-height: 26px;
    opacity: 0.5;
    font-weight: 300; 

    a {
      color: ${colors.primary_white};
    }
  }

  ${media.tablet} {
    margin: 0 0 40px 0;
    align-items: center;
  }
`;

export const ContactTitle = styled.h3`
  color: ${colors.primary_white};
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  opacity: 0.5;
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;