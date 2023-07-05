import styled from 'styled-components';

import { media } from '@/configs/index';

export const Location = styled.section`
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
    padding: 0;
  }

  ${media.mobileS} {
    width: 375px;
  }
`;