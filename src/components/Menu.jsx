import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { DrawerContext } from "../contexts/drawer-context";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fluidRange } from "polished";
import utilities from "../utilities";
import config from "../config";

const { brightness } = utilities;
const { palette } = config();

export default function Menu() {
  return (
    <Nav>
      <Button to={"/"}>Home</Button>
      <Button to={"/about"}>About</Button>
      <Button to={"/"}>Foo</Button>
      <Button to={"/"}>Bar</Button>
      <Button to={"/"}>Baz</Button>
    </Nav>
  );
}

function Button(props) {
  const { drawerClose } = useContext(DrawerContext);
  const handleClick = (href) => {
    setTimeout(() => Router.push(href), 700),
      setTimeout(() => drawerClose(), 300);
  };
  return (
    <ButtonBase onClick={() => handleClick(props.to)} props={props}>
      {props.children}
      <ButtonRipple />
    </ButtonBase>
  );
}

function useDebouncedRippleCleanUp(rippleCount, duration, cleanUpFunction) {
  useEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);
      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }
    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
}

function ButtonRipple({ duration = 500, color = "rgba(255, 255, 255, 0.25)" }) {
  const [rippleArray, setRippleArray] = useState([]);
  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });
  const addRipple = (event) => {
    const Ripple = event.currentTarget.getBoundingClientRect();
    const size = Ripple.width > Ripple.height ? Ripple.width : Ripple.height;
    const x = event.pageX - Ripple.x - size / 2;
    const y = event.pageY - Ripple.y - size / 2 - window.scrollY;
    const newRipple = {
      x,
      y,
      size,
    };
    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <Ripple duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </Ripple>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  padding: 0.5em 1em;
  border: none;
  position: relative;
  overflow: hidden;
  background: ${palette.primary};
  color: #fff;
  padding: 1rem 3rem 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  user-drag: none;
  transition: all 250ms;
  font-size: ${fluidRange(
    {
      prop: "font-size",
      fromSize: "18px",
      toSize: "24px",
    },
    "320px",
    "1200px"
  )};
  font-weight: normal;
  text-align: center;
  &:hover {
    background: ${brightness(palette.primary, -5)};
  }
`;

const Ripple = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-timing-function: ease-in-out;
    animation-duration: ${(props) => props.duration}ms;
  }
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

ButtonRipple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};
