import styled from 'styled-components';

import {media} from "@/configs/index";

export const Container = styled.div`

  width: 1200px;
  padding: 0 165px;
  margin: 0 auto;

  ${media.mobileS} {
    width: 375px;
    padding: 0 24px;
  }

  ${media.mobile} {
    width: 576px;
  }

  ${media.tablet} {
    width: 768px;
    padding: 0 40px;
  }
`
