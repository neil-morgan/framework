import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";

import config from "../config";

const { palette } = config();

export default function DrawerBurger() {
  const { drawerState, drawerToggle } = useContext(DrawerContext);

  return (
    <Toggle
      onClick={() => {
        drawerToggle();
      }}
    >
      <Bars>
        <Bar drawerState={drawerState} />
        <Bar drawerState={drawerState} />
        <Bar drawerState={drawerState} />
      </Bars>
    </Toggle>
  );
}

const Toggle = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  max-width: 5rem;
  min-height: 5rem;
  padding: 1rem;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1002;
  display: flex;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
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
  background: ${palette.primary};
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 500ms;

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
