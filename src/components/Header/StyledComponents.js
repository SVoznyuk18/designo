import styled from 'styled-components';

import {media, colors} from "@/configs/index";

export const HeaderSection = styled.header`
  width: 100%;
  height: 155px;
  display: flex;
  align-items: center;

  ${media.mobile} {
    height: 96px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-right: 20px;
`;

export const LogoTitle = styled.span`
  margin-left: 16px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${colors.primary_black};
`;
