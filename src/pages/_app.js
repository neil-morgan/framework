import { useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { css } from "styled-components";

import DrawerContextProvider, {
  DrawerContext,
} from "../contexts/drawer-context";

import GlobalStyle, { Debug } from "../components/GlobalStyle";
import { Row, Col } from "..";
import Logo from "../components/Logo";
import DrawerBurger from "../components/DrawerBurger";
import Menu from "../components/Menu";
import config from "../config";

const { debug, breakpoints } = config();

export default function App({ Component, pageProps, router }) {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 30,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <>
      {debug && <Debug />}
      <GlobalStyle />
      <DrawerContextProvider>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Main
            key={router.pathname}
            variants={pageVariants}
            transition={pageTransition}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Component {...pageProps} key={router.pathname} />
          </Main>
        </AnimatePresence>

        <Drawer />
      </DrawerContextProvider>
    </>
  );
}

function Root({ children }) {
  const { drawerState } = useContext(DrawerContext);
  return <RootElement drawerState={drawerState}>{children}</RootElement>;
}

function Navbar() {
  const { drawerState } = useContext(DrawerContext);
  return (
    <Nav drawerState={drawerState}>
      <Row>
        <Col xs={6}>
          <Logo />
        </Col>
        <Col xs={6}>
          <DrawerBurger />
        </Col>
      </Row>
    </Nav>
  );
}

function Drawer() {
  const { drawerState, drawerClose } = useContext(DrawerContext);
  const node = useRef();
  const handleClickOutside = (e) => {
    node.current.contains(e.target) || drawerClose();
  };
  useEffect(
    () => (
      drawerState
        ? document.addEventListener("click", handleClickOutside)
        : document.removeEventListener("click", handleClickOutside),
      () => {
        document.removeEventListener("click", handleClickOutside);
      }
    ),
    [drawerState]
  );
  return (
    <DrawerElement ref={node} drawerState={drawerState}>
      <Menu />
    </DrawerElement>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  width: 100%;
  padding: 0 1rem;
  background-color: #fff;
  pointer-events: none;
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(-${breakpoints.sm}rem, 0);
      @media only screen and (max-width: ${breakpoints.sm}rem) {
        transform: translate(calc(-100% + 5rem), 0);
      }
    `}
`;

const Main = styled(motion.main)`
  position: absolute;
  width: 100%;
  top: 5rem;
  right: 0;
  left: 0;
`;

const DrawerElement = styled.aside`
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
  transform: translate(100%, 0);
  display: flex;
  width: ${breakpoints.sm}rem;
  background: red;

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    width: calc(100% - 5rem);
  }

  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(0, 0);
    `}
`;
