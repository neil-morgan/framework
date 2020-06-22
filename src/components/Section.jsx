import PropTypes from "prop-types";
import styled from "styled-components";

import config from "../config";

const { dimensions } = config();
const ModificatorType = PropTypes.oneOf(dimensions);

const Section = styled.section`
  &::after,
  &::before {
    content: "";
    display: block;
    height: 7rem;

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
`;

Section.propTypes = {
  clearBoth: ModificatorType,
  clearBefore: ModificatorType,
  clearAfter: ModificatorType,
};

export default Section;
