import styled from 'styled-components';

import {media} from "@/configs/index";

export const ProjectsSection = styled.div`
  padding-bottom: 160px;
  display: grid;
  grid-template-columns: repeat(3, minmax(265px, 350px));
  grid-gap: 30px;
  justify-content: center;

  ${media.desktop} {
    grid-template-columns: repeat(2, minmax(270px, 420px));
  }

  ${media.tabletL} {
    padding-bottom: 120px;
  }

  ${media.tablet} {
    padding-bottom: 120px;
    grid-template-columns: repeat(1, 1fr);
  }
    
  ${media.mobile} {
    padding-bottom: 95px;
    grid-template-columns: repeat(1, minmax(270px, 420px));
  }
`;