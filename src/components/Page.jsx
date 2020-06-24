import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";
import Footer from "./Footer";
import config from "../config";

const { breakpoints, palette } = config();

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

  const variants = {
    initial: {
      opacity: 0,
      scale: 1.02,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.02,
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
  background-color: ${palette.backgroundDark};
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
