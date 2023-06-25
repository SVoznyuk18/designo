import styled from 'styled-components';

import {media} from "@/configs/index";

export const Container = styled.div`
  width: 1200px;
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
`
