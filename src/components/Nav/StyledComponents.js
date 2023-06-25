import styled, {css} from "styled-components";

import {media, colors} from "@/configs/index";

export const Navigation = styled.nav`
  width: 60%;

  ${media.mobile} {
    width: 100%;
  }

  ${props => props.popUpMenu && css`
    ${media.mobile} {
      position: fixed;
      top: 96px;
      left: 0;
      height: 0;
      background-color: ${colors.primary_black};
      z-index: -9999;
      overflow: hidden;
      transition: height 0.5s;

      ${props => props.active && css`
        height: 100%;
        z-index: 9999;
        overflow: visible
        transition: height 0.5s;
      `}
    }
  `}
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.mobile} {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: ${colors.primary_black};

    ${props => !props.popUpMenu && css`
      background-color: transparent;
      align-items: center;
      padding: 0;
  `}
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  
  a {
    color: ${colors.primary_black};
  }

  ${props => !props.popUpMenu && css`
    a {
      color: ${colors.primary_white};
    }
  `}

  ${media.mobile} {
    font-size: 24px;
    line-height: 25px;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: ${colors.primary_white};
    }
  }
`;

export const MenuButton = styled.div`
  ${media.mobile} {
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    cursor: pointer;

    span {
      width: 30px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${colors.primary_black};
      transition: all 0.5s;

      &:nth-of-type(2) {
        top: calc(50% - 5px);
      }

      &:nth-of-type(3) {
        top: calc(50% + 5px);
      }
    }

    ${props => props.activeMenu && css`
      span {
        &:nth-of-type(1) {
          display: none;
        }

        &:nth-of-type(2) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(45deg);
        }

        &:nth-of-type(3) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(-45deg);
        }
      }
    `}
  }
`;