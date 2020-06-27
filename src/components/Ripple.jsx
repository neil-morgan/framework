import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

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

export default function Ripple({
  duration = 500,
  color = "rgba(000, 000, 000, 0.25)",
}) {
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
    <RippleElement duration={duration} color={color} onMouseDown={addRipple}>
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
    </RippleElement>
  );
}

const RippleElement = styled.div`
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

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};
