import { useContext, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import { useSwipeable } from "../hooks/use-swipeable";
import usePageLoading from "../hooks/use-page-loading";
import GlobalContextProvider, {
  GlobalContext,
} from "../contexts/global-context";
import utilities from "../utilities";
import Config from "../config";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import { Row, Col } from "..";

const { brightness, opacity } = utilities;
const { palette, breakpoints } = Config();

export default function App({ Component, pageProps, router }) {
  return (
    <GlobalContextProvider>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <Drawer />
    </GlobalContextProvider>
  );
}

function Navbar() {
  const { drawerState, drawerClose } = useContext(GlobalContext);
  const handleClick = (e) => {
    drawerState
      ? (setTimeout(() => Router.push(e), 350), drawerClose())
      : Router.push(e);
  };
  return (
    <Nav drawerState={drawerState}>
      <Row>
        <Col xs={6}>
          <Link onClick={() => handleClick("/")}>
            <Logo />
          </Link>
        </Col>
        <Col xs={6}>
          <Row jc_end>
            {usePageLoading() && <Spinner />}
            <Burger />
          </Row>
        </Col>
      </Row>
    </Nav>
  );
}

function Burger() {
  const { drawerState, drawerToggle } = useContext(GlobalContext);
  return (
    <Toggle
      onClick={() => {
        drawerToggle();
      }}
    >
      <Bars>
        <Bar drawerState={drawerState} />
        <Bar drawerState={drawerState} />
        <Bar drawerState={drawerState} />
      </Bars>
    </Toggle>
  );
}

function Drawer() {
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

const Toggle = styled.a`
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  max-width: 3rem;
  min-height: 5rem;
  padding: 1rem 0.5rem;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1002;
  display: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  @media only screen and (max-width: ${breakpoints.lg}rem) {
    display: flex;
  }
`;

const Bars = styled.div`
  position: relative;
  display: flex;
  height: 2rem;
  width: 2rem;
`;

const Bar = styled.span`
  display: block;
  position: absolute;
  height: 20%;
  width: 100%;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 500ms;
  background: ${palette.primary};

  &:nth-child(1) {
    top: 0px;
    transform-origin: left top;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(45deg);
        width: 121%;
      `}
  }

  &:nth-child(2) {
    top: 40%;
    width: 60%;
    transform-origin: left center;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(0deg);
        width: 0%;
        opacity: 0;
      `}
  }

  &:nth-child(3) {
    top: 80%;
    width: 80%;
    transform-origin: left bottom;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translateX(0.29rem) rotate(-45deg);
        width: 121%;
      `}
  }
`;

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

const Link = styled.a`
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

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 0.4rem solid
    ${({ theme }) => opacity(brightness(theme.primary, -10), 40)};
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 1.5rem 1rem;
  animation: ${Spin} 1200ms linear infinite;
`;
