import { useContext } from "react";
import Router from "next/router";
import { GlobalContext } from "../contexts/global-context";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fluidRange } from "polished";
import Icon from "./Icon";
import Ripple from "./Ripple";
import utilities from "../utilities";
const { brightness } = utilities;

export default function Menu() {
  return (
    <Nav>
      <Button to={"/"}>
        <ButtonTitle>
          <ButtonIcon>
            <Icon.Home />
          </ButtonIcon>
          Home
        </ButtonTitle>
      </Button>
      <Button to={"/leagues"}>
        <ButtonTitle>
          <ButtonIcon>
            <Icon.Leagues />
          </ButtonIcon>
          Leagues
        </ButtonTitle>
      </Button>
      <Button to={"/drivers"}>
        <ButtonTitle>
          <ButtonIcon>
            <Icon.Drivers />
          </ButtonIcon>
          Drivers
        </ButtonTitle>
      </Button>
      <Button to={"/ARL"}>
        <ButtonTitle>
          <ButtonIcon>
            <Icon.ARL />
          </ButtonIcon>
          ARL
        </ButtonTitle>
      </Button>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  padding: 3rem 0 1.5rem;
  margin: 0 0 1.5rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 2rem;
    left: 2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.background};
  }
`;

const ButtonElement = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0 0 0.5em;
  border: none;
  position: relative;
  overflow: hidden;
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
      fromSize: "22px",
      toSize: "24px",
    },
    "320px",
    "1200px"
  )};
  font-weight: normal;
  text-align: center;
  transition: all 250ms;
  background: linear-gradient(
    to right,
    ${({ theme }) => brightness(theme.background, -6)} 10%,
    transparent 50%,
    ${({ theme }) => brightness(theme.background, -6)} 90%
  );
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => brightness(theme.background, 5)};
  }
`;

const ButtonTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 15rem;
`;

const ButtonIcon = styled.span`
  width: 1.5em;
  margin: 0 0.75em 0 0;
`;

Button.propTypes = {
  to: PropTypes.string,
};
