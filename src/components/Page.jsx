import { useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { DrawerContext } from "../contexts/drawer-context";

import config from "../config";

import Footer from "./Footer";

const { breakpoints, colors } = config();

export default function Page({ children }) {
  const { drawerState } = useContext(DrawerContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageElement drawerState={drawerState}>{children}</PageElement>
      <Footer />
    </>
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
        transform: translate(calc(-100% + 5rem), 0);
      }
    `}
`;
