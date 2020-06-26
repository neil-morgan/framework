import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fluidRange } from "polished";
import Config from "../config";

const { dimensions } = Config();

const ModificatorType = PropTypes.oneOf(dimensions);

const Root = css`
  font-family: 'Roboto';
  font-weight: 400;
  transition: all 500ms;
  margin: 0 0 0.5em 0;
  color: inherit;

  ${(props) =>
    props.left &&
    config(props).media[props.left]`
    text-align: left;
  `}

  ${(props) =>
    props.center &&
    config(props).media[props.center]`
    text-align: center;
  `}

  ${(props) =>
    props.right &&
    config(props).media[props.right]`
    text-align: right;
  `}

  ${(props) =>
    props.my0 &&
    config(props).media[props.my0]`
    margin-top: 0;
    margin-bottom: 0;
  `}

  ${(props) =>
    props.my1 &&
    config(props).media[props.my1]`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.my2 &&
    config(props).media[props.my2]`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  `}

  ${(props) =>
    props.mt0 &&
    config(props).media[props.mt0]`
    margin-top: 0;
  `}

  ${(props) =>
    props.mt1 &&
    config(props).media[props.mt1]`
    margin-top: 0.25em;
  `}

  ${(props) =>
    props.mt2 &&
    config(props).media[props.mt2]`
    margin-top: 0.5em;
  `}

  ${(props) =>
    props.mb0 &&
    config(props).media[props.mb0]`
    margin-bottom: 0;
  `}

  ${(props) =>
    props.mb1 &&
    config(props).media[props.mb1]`
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.mb2 &&
    config(props).media[props.mb2]`
    margin-bottom: 0.5em;
  `}
`;

export const H1 = styled.h1`
  ${Root};
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "36px",
      toSize: "42px",
    },
    "320px",
    "1200px"
  )}
`;

export const H2 = styled.h2`
  ${Root}
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "24px",
      toSize: "30px",
    },
    "320px",
    "1200px"
  )}
`;

const Heading = {
  H1,
  H2,
};

Heading.displayName = "Heading";

Heading.propTypes = {
  left: ModificatorType,
  center: ModificatorType,
  right: ModificatorType,
};

export default Heading;
