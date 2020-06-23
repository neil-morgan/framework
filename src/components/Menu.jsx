import { useContext } from "react";
import styled from "styled-components";
import Router from "next/router";

import { DrawerContext } from "../contexts/drawer-context";

export default function Menu() {
  const { drawerClose } = useContext(DrawerContext);

  const handleClick = (href) => {
    setTimeout(() => Router.push(href), 350), drawerClose();
  };

  return (
    <Nav>
      <Link onClick={() => handleClick("/")}>Home</Link>
      <Link onClick={() => handleClick("/about")}>About</Link>
    </Nav>
  );
}

const Nav = styled.nav``;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
