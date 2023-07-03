import styled, {css} from 'styled-components';

import { colors } from '@/configs/index';

export const Button = styled.button`
    width: 156px;
    height: 52px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 99999;

    ${props => props.variant === 'light' && css`
        background-color: ${colors.primary_white};
        color: ${colors.secondary_dark};

        &:hover {
            background-color: ${colors.secondary_peach};
            color: ${colors.primary_white};
        }
    `}

    ${props => props.variant === 'peach' && css`
        background-color: ${colors.primary_peach};
        color: ${colors.primary_white};

        &:hover {
            background-color: ${colors.secondary_peach};
            color: ${colors.primary_white};
        }
        
    `}





`;