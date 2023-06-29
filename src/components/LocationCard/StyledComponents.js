import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.tablet} {
        margin-bottom: 50px;

        &:last-of-type {
            margin-bottom: 0px;
        }
    }


`;
export const Title = styled.h3`
    margin: 45px 0 30px;
    color: ${colors.secondary_dark};
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 56px;
    border-radius: 8px;
    background-color: ${colors.primary_peach};
    color: ${colors.primary_white};

    &:hover {
        background-color: ${colors.secondary_peach};
    }
`;
