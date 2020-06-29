import { useContext, useRef } from "react";
import { useSwipeable } from "../hooks/use-swipeable";
import Router from "next/router";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Logo from "./Logo";
import Menu from "./Menu";
import Config from "../config";
import utilities from "../utilities";

const { brightness } = utilities;
const { breakpoints } = Config();

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

  const handleClick = (e) => {
    drawerState
      ? (setTimeout(() => Router.push(e), 350), drawerClose())
      : Router.push(e);
  };

  return (
    <Aside ref={node} drawerState={drawerState} {...handlers}>
      <LogoContainer>
        <LogoLink onClick={() => handleClick("/")}>
          <Logo />
        </LogoLink>
      </LogoContainer>
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
  padding: 5rem 0 12rem;
  transform-origin: right;
  transition: all 500ms;
  transform: translate(25%, 0);
  display: flex;
  width: calc(${breakpoints.sm}rem);
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.background},
    ${({ theme }) => brightness(theme.background, -6)} 100%
  );

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    width: 100%;
  }
  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(0, 0);
    `}
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 1rem 0 1.5rem;
`;
const LogoLink = styled.a`
  cursor: pointer;
  height: 6rem;
  width: 9rem;
  padding: 1rem 0;
`;
