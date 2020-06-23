import { useEffect, useContext, useRef } from "react";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";
import Footer from "./Footer";
import config from "../config";

const { breakpoints } = config();

export default function Page({ children }) {
  const { drawerState, drawerClose } = useContext(DrawerContext);
  const node = useRef();
  const handleClickInside = (e) => {
    if (!node.current.contains(e.target)) {
      return;
    }
    drawerClose();
  };

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

  return (
    <PageElement ref={node} drawerState={drawerState}>
      {children}
      <Footer />
    </PageElement>
  );
}

const PageElement = styled.div`
  background-color: #fff;
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
