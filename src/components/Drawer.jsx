import { useContext, useRef } from "react";
import { useSwipeable } from "../hooks/use-swipeable";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";
import Menu from "./Menu";
import config from "../config";

const { breakpoints } = config();

export default function Drawer() {
  const { drawerState, drawerClose } = useContext(DrawerContext);
  const node = useRef();
  const handlers = useSwipeable({
    onSwipedRight: () => {
      drawerClose();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });
  return (
    <Aside ref={node} drawerState={drawerState} {...handlers}>
      <Menu />
    </Aside>
  );
}

const Aside = styled.aside`
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 9;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: calc(100vh + 5rem);
  padding: 1rem 1rem 12rem;
  transform-origin: right;
  transition: all 500ms;
  transform: translate(0, 0);
  display: flex;
  width: calc(${breakpoints.sm}rem);
  background: red;
  @media only screen and (max-width: ${breakpoints.sm}rem) {
    width: 100%;
  }
  /* ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(0, 0);
    `} */
`;
