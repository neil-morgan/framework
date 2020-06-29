import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Footer from "./Footer";

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
      <Content
        ref={node}
        variants={variants}
        transition={transition}
        initial="initial"
        animate="in"
        exit="out"
      >
        {children}
        <Footer />
      </Content>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  z-index: 10;
  width: 100%;

  padding: 5rem 0 0;
  top: 0;
  right: 0;
  left: 0;
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
  background: ${({ theme }) => theme.background};

  ${({ drawerState }) =>
    drawerState &&
    css`
      transform: translate(-30rem, 0);
    `}
`;

const Content = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;
