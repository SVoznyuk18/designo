import styled from 'styled-components';

import { media, colors } from '@/configs/index';

export const FormSection = styled.form`
display: inline-block;
// width: 100%;
    // display: flex;
    // flex-direction: column;
    background-color: ${colors.primary_peach};
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 380px;
    min-width: 325px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 20px 115px 10px 16px;
    color: ${colors.primary_white};
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    border-bottom: 1px solid ${colors.primary_white};
    background-color: ${colors.primary_peach};

    ::placeholder {
        color: ${colors.primary_white};
        opacity: 0.5;
    }

`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 20px 16px 10px;
    color: ${colors.primary_white};
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    resize: none;
    border: none;
    border-bottom: 1px solid ${colors.primary_white};

    ::placeholder {
        color: ${colors.primary_white};
        opacity: 0.5;
    }

    &:focus {
        outline: 0;
        border: none;
        border-bottom: 3px solid ${colors.primary_white};
    }
`;

export const Error = styled.div`
    position: absolute;
    right: 8px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ErrorMessage = styled.h3`
    margin-right: 10px;
    color: ${colors.primary_white};
    font-size: 12px;
    font-style: italic;
    line-height: 26px;
`;

export const Button = styled.button`
    width: 150px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-left: auto;
    border-radius: 8px;
    background: ${colors.primary_white};
    color: ${colors.secondary_dar};
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background: ${colors.secondary_peach};
        color: ${colors.primary_white};
    }

    ${media.mobile} {
        margin: 0 auto;
        margin-top: 24px;
    }
`;