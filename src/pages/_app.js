import { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { css } from "styled-components";
import DrawerContextProvider, {
  DrawerContext,
} from "../contexts/drawer-context";
import { useSwipeable } from "../hooks/use-swipeable";
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
  const handlers = useSwipeable({
    onSwipedRight: () => {
      drawerClose();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return (
    <DrawerElement ref={node} drawerState={drawerState} {...handlers}>
      <Menu />
    </DrawerElement>
  );
}

const Main = styled(motion.main)`
  position: absolute;
  width: 100%;
  top: 5rem;
  right: 0;
  left: 0;
`;

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
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
`;

const DrawerElement = styled.aside`
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 10;
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
    width: 100%;
  }

  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(0, 0);
    `}
`;
