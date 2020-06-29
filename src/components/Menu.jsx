import { useContext } from "react";
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
      <Button to={"/leagues"}>Leagues</Button>
      <Button to={"/drivers"}>Drivers</Button>
      <Button to={"/ARL"}>ARL</Button>
    </Nav>
  );
}

function Button(props) {
  const { drawerClose } = useContext(GlobalContext);
  const handleClick = (href) => {
    setTimeout(() => Router.push(href), 500),
      setTimeout(() => drawerClose(), 100);
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
  margin: 0 0 0.2rem;
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

Button.propTypes = {
  to: PropTypes.string,
};
