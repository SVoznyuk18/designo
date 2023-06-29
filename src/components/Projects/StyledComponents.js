import styled from 'styled-components';

import {media} from "@/configs/index";

export const ProjectsSection = styled.div`
  padding: 160px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(265px, 350px));
  grid-gap: 30px;
  justify-content: center;

  ${media.desktop} {
    grid-template-columns: repeat(2, minmax(270px, 420px));
  }

  ${media.tabletL} {
    padding: 120px 0;
  }

  ${media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
    
  ${media.mobile} {
    padding: 95px 0;
    grid-template-columns: repeat(1, minmax(270px, 420px));
  }
`;