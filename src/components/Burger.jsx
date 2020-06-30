import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Config from "../config";

const { palette, breakpoints } = Config();

export default function Burger() {
  const { themeState, drawerState, drawerToggle } = useContext(GlobalContext);

  return (
    <Toggle
      onClick={() => {
        drawerToggle();
      }}
    >
      <Bars>
        <Bar themeState={themeState} drawerState={drawerState} />
        <Bar themeState={themeState} drawerState={drawerState} />
        <Bar themeState={themeState} drawerState={drawerState} />
      </Bars>
    </Toggle>
  );
}

const Toggle = styled.a`
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  max-width: 3rem;
  min-height: 5rem;
  padding: 1rem 0.5rem;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1002;
  display: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  @media only screen and (max-width: ${breakpoints.lg}rem) {
    display: flex;
  }
`;

const Bars = styled.div`
  position: relative;
  display: flex;
  height: 2rem;
  width: 2rem;
`;

const Bar = styled.span`
  display: block;
  position: absolute;
  height: 20%;
  width: 100%;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 500ms;
  background: ${palette.primary};

  &:nth-child(1) {
    top: 0px;
    transform-origin: left top;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(45deg);
        width: 121%;
      `}
  }

  &:nth-child(2) {
    top: 40%;
    width: 60%;
    transform-origin: left center;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(0deg);
        width: 0%;
        opacity: 0;
      `}
  }

  &:nth-child(3) {
    top: 80%;
    width: 80%;
    transform-origin: left bottom;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(-45deg);
        width: 121%;
      `}
  }
`;
