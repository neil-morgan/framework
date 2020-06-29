import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Footer from "./Footer";
import Config from "../config";

const { breakpoints } = Config();

export default function Page({ children }) {
  const { drawerState, drawerClose } = useContext(GlobalContext);
  const node = useRef();

  useEffect(
    () => (
      drawerState
        ? (document.addEventListener("mousedown", handleClickInside),
          document.addEventListener("touchstart", handleClickInside))
        : (document.removeEventListener("mousedown", handleClickInside),
          document.removeEventListener("touchstart", handleClickInside)),
      () => {
        document.removeEventListener("mousedown", handleClickInside),
          document.removeEventListener("touchstart", handleClickInside);
      }
    ),
    [drawerState]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.33,
  };

  const handleClickInside = (e) => {
    if (!node.current.contains(e.target)) {
      return;
    }
    drawerClose();
  };

  return (
    <Main drawerState={drawerState}>
      <Body
        ref={node}
        variants={variants}
        transition={transition}
        initial="initial"
        animate="in"
        exit="out"
      >
        {children}
        <Footer />
      </Body>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 5rem;
  right: 0;
  left: 0;
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
  box-shadow: 0.2rem 0 0.2rem 0rem rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.background};

  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(-${breakpoints.sm}rem, 0);
      @media only screen and (max-width: ${breakpoints.sm}rem) {
        transform: translate(calc(-100% + 0.1px), 0);
      }
    `}
`;

const Body = styled(motion.div)`
  position: relative;
  z-index: 10;
`;
