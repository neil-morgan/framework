import { useContext } from "react";
import styled from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";
import { Row, Col } from "..";
import Logo from "../components/Logo";
import Burger from "./Burger";

export default function Navbar() {
  const { drawerState } = useContext(DrawerContext);
  return (
    <Nav drawerState={drawerState}>
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
        <Col xs={6}>
          <Burger />
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
  padding: 0 1rem;
  background-color: #fff;
  pointer-events: none;
`;
