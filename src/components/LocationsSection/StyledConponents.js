import styled from 'styled-components';

import {media} from "@/configs/index";

export const Locations = styled.section`
  width: 100%;
  padding-bottom: 160px;

  ${media.tabletL} {
    padding-bottom: 120px;
  }
`;

export const LocationsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;