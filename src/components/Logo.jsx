import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/global-context";
import Router from "next/router";
import Config from "../config";

const { palette } = Config();

export default function Logo() {
  const { drawerState, drawerClose } = useContext(GlobalContext);

  const handleClick = (e) => {
    drawerState
      ? (setTimeout(() => Router.push(e), 350), drawerClose())
      : Router.push(e);
  };

  return (
    <Link onClick={() => handleClick("/")}>
      <Graphic viewBox="0 0 44.3 25">
        <polygon points="38.8,25 38.8,10.9 31.8,15.7 19.3,7 19.3,0 31.8,8.5 44.3,0 44.3,25 	" />
        <polygon points="0,25 0,0 25,17.2 25,24.2 5.5,10.3 5.5,25 	" />
      </Graphic>
    </Link>
  );
}

const Link = styled.a`
  cursor: pointer;
  height: 5rem;
  width: 5.54rem;
  padding: 1rem;
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
const Graphic = styled.svg`
  height: 100%;
  width: 100%;
  fill: ${palette.primary};
  transition: all 500ms cubic-bezier(0.75, 0, 0.25, 1);
`;
