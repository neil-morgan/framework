import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";
import Footer from "./Footer";
import config from "../config";

const { breakpoints } = config();

export default function Page({ children }) {
  const { drawerState, drawerClose } = useContext(DrawerContext);
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

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 15,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.2,
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
        variants={pageVariants}
        transition={pageTransition}
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
  background: #fff;
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(-${breakpoints.sm}rem, 0);
      @media only screen and (max-width: ${breakpoints.sm}rem) {
        transform: translate(-100%, 0);
      }
    `}
`;

const Body = styled(motion.div)`
  position: relative;
  z-index: 10;
`;
