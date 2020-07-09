import { useContext, useEffect } from "react";
import Router from "next/router";
import { GlobalContext } from "../contexts/global-context";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fluidRange } from "polished";
import Icon from "../components/Icon";
import Ripple from "../components/Ripple";
import Divider from "../components/Divider";
import utilities from "../utilities";
import Config from "../config";

const { breakpoints } = Config();
const { brightness } = utilities;

export default function Menu() {
  useEffect(() => {
    Router.prefetch("/");
    Router.prefetch("/leagues");
    Router.prefetch("/drivers");
    Router.prefetch("/ARL");
    Router.prefetch("/schedule");
    Router.prefetch("/results");
    Router.prefetch("/stats");
  }, []);

  return (
    <Nav>
      <NavItem to={"/"}>
        <Icon.Home />
        Home
      </NavItem>
      <NavItem to={"/leagues"}>
        <Icon.Trophy />
        Leagues
      </NavItem>
      <NavItem to={"/drivers"}>
        <Icon.Driver />
        Drivers
      </NavItem>
      <NavItem to={"/ARL"}>
        <Icon.Star />
        ARL
      </NavItem>
      <Divider />
      <NavItem to={"/schedule"}>
        <Icon.Calendar />
        Schedule
      </NavItem>
      <NavItem to={"/results"}>
        <Icon.Rocket />
        Results
      </NavItem>
      <NavItem to={"/stats"}>
        <Icon.Chart />
        Stats
      </NavItem>
      <Divider />
    </Nav>
  );
}

function NavItem(props) {
  const { drawerClose } = useContext(GlobalContext);
  const handleClick = (href) => {
    if (window.innerWidth < breakpoints.lg * 16) {
      setTimeout(() => Router.push(href), 500),
        setTimeout(() => drawerClose(), 100);
    } else {
      Router.push(href);
      drawerClose();
    }
  };
  return (
    <Link onClick={() => handleClick(props.to)} props={props}>
      {props.children}
      <Ripple />
    </Link>
  );
}

const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  padding: 3rem 0;
`;

const Link = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 21rem;
  max-height: 5.5rem;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  padding: 0.5em 1em;
  border: none;
  position: relative;
  overflow: hidden;
  color: #fff;
  padding: 1rem 3rem 0.75rem;
  letter-spacing: 0.1rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  user-drag: none;
  transition: all 250ms;
  font-weight: normal;
  text-align: center;
  font-size: ${fluidRange(
    {
      prop: "font-size",
      fromSize: "22px",
      toSize: "24px",
    },
    "320px",
    "1200px"
  )};
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
  svg {
    max-width: 1.1em;
    margin: 0 0.75em 0 0;
  }
`;

Link.propTypes = {
  to: PropTypes.string,
};
