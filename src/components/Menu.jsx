import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { GlobalContext } from "../contexts/global-context";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fluidRange } from "polished";
import Ripple from "./Ripple";
import utilities from "../utilities";
import Config from "../config";

const { brightness } = utilities;
const { palette } = Config();

export default function Menu() {
  return (
    <Nav>
      <Button to={"/"}>Home</Button>
      <Button to={"/about"}>About</Button>
      <Button to={"/"}>Foo</Button>
      <Button to={"/"}>Bar</Button>
      <Button to={"/"}>Baz</Button>
    </Nav>
  );
}

function Button(props) {
  const { drawerClose } = useContext(GlobalContext);
  const handleClick = (href) => {
    setTimeout(() => Router.push(href), 400),
      setTimeout(() => drawerClose(), 150);
  };
  return (
    <ButtonElement onClick={() => handleClick(props.to)} props={props}>
      {props.children}
      <Ripple />
    </ButtonElement>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonElement = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  padding: 0.5em 1em;
  border: none;
  position: relative;
  overflow: hidden;
  background: ${palette.primary};
  color: #fff;
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
  transition: all 250ms;
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
  &:hover {
    background: ${brightness(palette.primary, -5)};
  }
`;
