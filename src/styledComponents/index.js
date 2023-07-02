import styled from 'styled-components';
import Image from 'next/image';
import {media} from "@/configs/index";

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
`
export const BgImage = styled(Image)`
  z-index: -1;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
`;