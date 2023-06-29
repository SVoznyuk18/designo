import styled from 'styled-components';

import { colors } from '@/configs/index';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.h3`
    color: ${colors.secondary_dark};
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 5px;
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
        background-color: ${colors.secondary_light_peach};
    }
`;
