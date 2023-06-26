import styled from 'styled-components';
import Image from 'next/image';
import { media, colors } from '@/configs/index';

export const ProjectsSection = styled.section`
  padding-top: 160px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 310px);
  grid-gap: 30px;

  ${media.tablet} {
    padding-top: 120px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 200px);
    grid-gap: 24px;
  }

  ${media.tablet} {
    grid-template-rows: repeat(3, 250px);
  }
`;

export const ProjectItem = styled.div`
  position: relative;
  border-radius: 15px;
  &:nth-of-type(1) {
    grid-row: 1/3;
  }

  ${media.tablet} {
    &:nth-of-type(1) {
      grid-row: 1/2;
    }
  }
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    background-color: rgba(231, 129, 107, 0.5);
  }
`;

export const ProjectTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.primary_white};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ProjectSubTitle = styled.h4`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  color: ${colors.primary_white};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 15px;
  }
`;
