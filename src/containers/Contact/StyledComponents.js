import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const ContactSection = styled.section`
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
    padding: 0 0 0;
  }

  ${media.mobileS} {
    width: 375px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 55px 96px;
  background-color: ${colors.primary_peach};
  border-radius: 15px;
  overflow: hodden;

  ${media.desktop} {
    flex-direction: column;
    padding: 71px 58px;
  }

  ${media.mobile} {
    padding: 71px 24px;
    border-radius: 0px;
  }
`;

export const Info = styled.div`
  padding-top: 80px;
  width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${media.desktop} {
    padding-top: 0px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  color: ${colors.primary_white};
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;

 
`;

export const SubTitle = styled.h2`
  color: ${colors.primary_white};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${media.desktop} {
    margin-bottom: 48px;
  }
`; 
