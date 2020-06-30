import { useContext, useRef } from "react";
import { useSwipeable } from "../hooks/use-swipeable";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Menu from "./Menu";
import utilities from "../utilities";
import Config from "../config";

const { breakpoints } = Config();
const { brightness } = utilities;

export default function Global() {
  const { drawerState, drawerClose } = useContext(GlobalContext);
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
  display: flex;
  flex-direction: column;
  z-index: 9;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: calc(100vh + 5rem);
  padding: 5rem 4rem 12rem;
  transform-origin: right;
  transition: all 500ms;
  transform: translate(0, 0);
  display: flex;
  width: 30rem;
  background: ${({ theme }) => brightness(theme.background, -6)};

  @media only screen and (max-width: ${breakpoints.lg}rem) {
    transform: translate(25%, 0);
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translate(0, 0);
      `}
  }
`;
