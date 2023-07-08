import styled from 'styled-components';

import { media } from '@/configs/index';

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
