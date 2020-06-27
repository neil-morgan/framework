import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import { Row, Col } from "..";
import Logo from "../components/Logo";
import Burger from "./Burger";
import Config from "../config";
import utilities from "../utilities";

const { brightness } = utilities;
const { palette } = Config();

export default function Navbar(props) {
  const { drawerState } = useContext(GlobalContext);
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
  background: ${({ theme }) => theme.foreground};
  box-shadow: 0 0.2rem 0.2rem 0rem rgba(0, 0, 0, 0.2);
`;
