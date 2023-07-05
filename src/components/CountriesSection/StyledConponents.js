import styled from 'styled-components';

import {media} from "@/configs/index";

export const Countries = styled.section`
  width: 100%;
  padding: 120px 0 0 ;
`;

export const CountriesContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;