import PropTypes from "prop-types";
import styled from "styled-components";

import Config from "../config";

const { dimensions, palette } = Config();
const ModificatorType = PropTypes.oneOf(dimensions);

const Section = styled.section`
  &::after,
  &::before {
    content: "";
    display: block;
    height: 3.5rem;

    ${(props) =>
      props.clearBoth &&
      config(props).media[props.clearBoth]`
      content: none;
    `}
  }

  ${(props) =>
    props.clearBefore &&
    config(props).media[props.clearBefore]`
    &::before {
      content: none;
    }
  `}

  ${(props) =>
    props.clearAfter &&
    config(props).media[props.clearAfter]`
    &::after {
      content: none;
    }
  `}

  background: ${(props) => props.theme.background};
  h1,
  h2 {
    color: ${(props) => props.theme.heading};
  }
  p {
    color: ${(props) => props.theme.paragraph};
  }
  
  ${(props) => {
    if (props.invert) {
      if (props.theme.mode === "light")
        return `
        background: ${palette.dark.background};
        h1,
        h2 {
          color: ${palette.dark.heading};
        }
        p { color: ${palette.dark.paragraph};
        }`;
      else
        return `
        background: ${palette.light.background};
        h1,
        h2 {
          color: ${palette.light.heading};
        }
        p { color: ${palette.light.paragraph};
        }`;
    }
  }};
`;

Section.propTypes = {
  clearBoth: ModificatorType,
  clearBefore: ModificatorType,
  clearAfter: ModificatorType,
};

export default Section;
