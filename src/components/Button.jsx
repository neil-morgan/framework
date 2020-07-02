import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fluidRange } from "polished";
import Ripple from "./Ripple";
import useWindowSize from "../hooks/use-window-size";
import { GlobalContext } from "../contexts/global-context";

import utilities from "../utilities";
import Config from "../config";

const { brightness } = utilities;
const { breakpoints } = Config();

export default function Button(props) {
  const [mouseIsHovering, setMouseIsHovering] = useState(false);
  const [buttonIsDown, setButtonIsDown] = useState(false);
  const { drawerClose } = useContext(GlobalContext);
  const getWindowSize = useWindowSize();

  const handleMouseEnter = () => {
    setMouseIsHovering(!0);
  };

  const handleMouseLeave = () => {
    setButtonIsDown(!1);
    setMouseIsHovering(!1);
  };

  const handleMouseClick = (e) => {
    e.preventDefault();
    setMouseIsHovering(!1);

    "mousedown" === e.type && setButtonIsDown(!0);

    "mouseup" === e.type &&
      setTimeout(() => {
        setButtonIsDown(!1);
        getWindowSize.innerWidth > 16 * breakpoints.md &&
          setMouseIsHovering(!0);
      }, 40);

    "click" === e.type &&
      setTimeout(() => {
        window.location.pathname === props.link && drawerClose();
        // props.link && navigate(props.link);
        props.function && props.function();
      }, 140);
  };

  const handleTouchPress = (s) => {
    "touchstart" === s.type
      ? setButtonIsDown(!0)
      : setTimeout(() => {
          setMouseIsHovering(!1);
          setButtonIsDown(!1);
        }, 40);
  };

  return (
    <ButtonWrapper
      onClick={handleMouseClick}
      onMouseDown={handleMouseClick}
      onMouseUp={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchPress}
      onTouchEnd={handleTouchPress}
      buttonIsDown={buttonIsDown}
      mouseIsHovering={mouseIsHovering}
      className={props.className}
      props={props}
    >
      <ButtonBase props={props}>
        {props.children}
        <Ripple />
      </ButtonBase>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1000;
  margin:3rem 0;
  align-self: center;
  
  ${({ buttonIsDown }) =>
    buttonIsDown &&
    css`
      transform: translateY(0.5rem);
      &::after {
        transform: translateY(-0.8rem);
      }
      &::before {
        transform: translateY(-0.5rem);
      }
    `}

    ${({ mouseIsHovering }) =>
      mouseIsHovering &&
      css`
        transform: translateY(0.2rem);
        &::after {
          transform: translateY(-0.4rem);
        }
        &::before {
          transform: translateY(-0.2rem);
        }
      `}

  &,
  &::after,
  &::before{
    transition: all 150ms ease-out;
  }
  &::after{
    content: "";
    z-index: -1;
    pointer-events: none;
    position: absolute;
    bottom: -0.9rem; 
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.15);
    border-radius: 0.66rem;
  }
  &::before {
    content: "";
    z-index: 0;
    pointer-events: none;
    bottom: -0.5rem;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.66rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => brightness(theme.tertiary, -15)} 0%,
      ${({ theme }) => brightness(theme.tertiary, -30)} 7.5%,
      ${({ theme }) => brightness(theme.tertiary, -30)} 92.5%,
      ${({ theme }) => brightness(theme.tertiary, -15)} 100%
    );
    ${({ props }) =>
      props.alt &&
      css`
        background: linear-gradient(
          90deg,
          ${({ theme }) => brightness(theme.secondary, -15)} 0%,
          ${({ theme }) => brightness(theme.secondary, -30)} 7.5%,
          ${({ theme }) => brightness(theme.secondary, -30)} 92.5%,
          ${({ theme }) => brightness(theme.secondary, -15)} 100%
        );
      `}
  }

  ${({ props }) =>
    props.top &&
    Config(props).media[props.top]`
        margin-right: auto;
  `}

  ${({ props }) =>
    props.right &&
    Config(props).media[props.right]`
        margin-left: auto;
  `}

  ${({ props }) =>
    props.bottom &&
    Config(props).media[props.bottom]`
        margin-right: auto;
  `}

  ${({ props }) =>
    props.left &&
    Config(props).media[props.left]`
        align-self: flex-start;
  `}
  ${({ props }) =>
    props.mx0 &&
    Config(props).media[props.mx0]`
    margin-right: 0;
    margin-left: 0;
  `}

  ${({ props }) =>
    props.mx1 &&
    Config(props).media[props.mx1]`
    margin-right: 1em;
    margin-left: 1em;
  `}

  ${({ props }) =>
    props.mx2 &&
    Config(props).media[props.mx2]`
    margin-right: 2em;
    margin-left: 2em;
  `}

  ${({ props }) =>
    props.mr0 &&
    Config(props).media[props.mr0]`
    margin-right: 0;
  `}

  ${({ props }) =>
    props.mr1 &&
    Config(props).media[props.mr1]`
    margin-right: 1em;
  `}

  ${({ props }) =>
    props.mr2 &&
    Config(props).media[props.mr2]`
    margin-right: 2em;
  `}

  ${({ props }) =>
    props.ml0 &&
    Config(props).media[props.ml0]`
    margin-left: 0;
  `}

  ${({ props }) =>
    props.ml1 &&
    Config(props).media[props.ml1]`
    margin-left: 1em;
  `}

  ${({ props }) =>
    props.ml2 &&
    Config(props).media[props.ml2]`
    margin-left: 2em;
  `}
`;

const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  padding: 2em 2em;
  border-radius: 0.66rem;
  border: none;
  position: relative;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(
    33deg,
    ${({ theme }) => brightness(theme.tertiary, 0)} 0%,
    ${({ theme }) => brightness(theme.tertiary, -20)} 100%
  );
  ${({ props }) =>
    props.alt &&
    css`
      background: linear-gradient(
        33deg,
        ${({ theme }) => brightness(theme.secondary, 0)} 0%,
        ${({ theme }) => brightness(theme.secondary, -20)} 100%
      );
    `}

  padding: 1rem 3rem 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  user-drag: none;
  transition: all 150ms ease-in-out;
  font-size: ${fluidRange(
    {
      prop: "font-size",
      fromSize: "18px",
      toSize: "24px",
    },
    "320px",
    "1200px"
  )};
  font-weight: normal;
  text-align: center;
`;

ButtonWrapper.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  alt: PropTypes.bool,
};
