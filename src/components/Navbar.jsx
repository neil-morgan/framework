import { useContext } from "react";
import styled from "styled-components";
import Router from "next/router";
import usePageLoading from "../hooks/use-page-loading";
import { GlobalContext } from "../contexts/global-context";
import { Row, Col } from "..";
import Logo from "../components/Logo";
import Burger from "./Burger";
import Spinner from "./Spinner";

export default function Navbar() {
  const { drawerState } = useContext(GlobalContext);

  const handleClick = (e) => {
    drawerState
      ? (setTimeout(() => Router.push(e), 350), drawerClose())
      : Router.push(e);
  };

  return (
    <Nav drawerState={drawerState}>
      <Row>
        <Col xs={6}>
          <HomeLink onClick={() => handleClick("/")}>
            <Logo />
          </HomeLink>
        </Col>
        <Col xs={6}>
          <Row end="xs">
            {usePageLoading() && <Spinner />}
            <Burger />
          </Row>
        </Col>
      </Row>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  width: 100%;
  min-height: 5rem;
  background: ${({ theme }) => theme.foreground};
  border-bottom: solid 0.2rem ${({ theme }) => theme.background};
`;

export const HomeLink = styled.a`
  cursor: pointer;
  height: 5rem;
  width: 4.5rem;
  padding: 1.5rem 0.5rem;
  display: flex;
  z-index: 1002;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  pointer-events: auto;
`;

const ButtonIcon = styled.span`
  width: 1.5em;
`;
