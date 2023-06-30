import styled from 'styled-components';

import { media } from '@/configs/index';

export const Main = styled.main`
  width: 1440px;
  max-width: 100%;
  padding: 0 165px 380px;
  margin: 0 auto;

  ${media.tabletL} {
    width: 992px;
    padding: 0 40px 120px;
  }

  ${media.mobile} {
    width: 576px;
    padding: 0 0 310px;
  }

  ${media.mobileS} {
    width: 375px;
  }
`;