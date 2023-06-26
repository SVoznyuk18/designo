import styled from 'styled-components';
import Image from 'next/image';
import { media, colors } from '@/configs/index';

export const MainSection = styled.main`
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
    padding: 0;
    }

    ${media.mobileS} {
    width: 375px;
    padding: 0;
    }
`;

export const MainContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 640px;
    padding: 145px 95px 0;
    background-color: ${colors.primary_peach};
    border-radius: 15px;
    z-index: -1;

    ${media.tablet} {
        padding: 60px 0 0 0;
        align-items: center;
       
    }

    ${media.mobile} {
        padding: 80px 24px 0;
        border-radius: 0px;
    }
`;

export const Title = styled.h1`
    max-width: 540px;
    color: #FFF;
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
    
    ${media.tablet} {
        text-align: center;
    }
    ${media.mobile} {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const SubTitle = styled.h2`
    max-width: 450px;
    color: #FFF;
    font-size: 16px;
    line-height: 26px;
    
    ${media.tablet} {
        text-align: center;
    }
    ${media.mobile} {
        font-size: 15px;
        line-height: 25px;
    }
`;

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
    // position: absolute;
    // top: 0;
    // left: 0;
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