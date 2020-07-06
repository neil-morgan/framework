import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import { Section, Container, Col, Heading, Text } from "../";
import utilities from "../utilities";
import Config from "../config";

const { brightness } = utilities;
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

function Footer() {
  return (
    <FooterElement as="footer">
      <Container>
        <Col xs>
          <Heading.H2>Footer</Heading.H2>
          <Text.P>
            Laboris consequat pariatur consequat qui commodo anim nisi velit.
            Amet ut ut duis excepteur id veniam mollit officia do. Do ut in
            tempor ad deserunt sint in exercitation est. Quis ex ad mollit
            dolore laboris adipisicing ea culpa. Duis non eu Lorem officia.
          </Text.P>
        </Col>
      </Container>
    </FooterElement>
  );
}

const FooterElement = styled(Section)`
  background: ${({ theme }) => brightness(theme.background, -3)};
  margin: auto 0 0;
`;

const Main = styled.main`
  display: flex;
  position: absolute;
  z-index: 10;
  width: calc(100% - 30rem);
  padding: 5rem 0 0;
  top: 0;
  right: 0;
  left: 0;
  transform: translate(0, 0);
  transition: all 500ms;
  transform-origin: right;
  background: ${({ theme }) => theme.background};
  @media only screen and (max-width: ${breakpoints.lg}rem) {
    width: 100%;
    ${({ drawerState }) =>
      drawerState &&
      css`
        transform: translate(-30rem, 0);
      `}
  }
`;

const Content = styled(motion.div)`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  z-index: 10;
`;
