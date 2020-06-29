import PropTypes from "prop-types";
import styled from "styled-components";

import Config from "../config";

const { dimensions } = Config();
const ModificatorType = PropTypes.oneOf(dimensions);

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props) =>
    props.reverse &&
    `
    flex-direction: row-reverse;
  `}

  ${(props) =>
    props.column &&
    Config(props).media[props.column]`
    flex-direction: column;
  `}

  ${(props) =>
    props.start &&
    Config(props).media[props.start]`
    justify-content: flex-start;
  `}

  ${(props) =>
    props.center &&
    Config(props).media[props.center]`
    justify-content: center;
  `}

  ${(props) =>
    props.end &&
    Config(props).media[props.end]`
    justify-content: flex-end;
  `}

  ${(props) =>
    props.top &&
    Config(props).media[props.top]`
    align-items: flex-start;
  `}

  ${(props) =>
    props.middle &&
    Config(props).media[props.middle]`
    align-items: center;
  `}

  ${(props) =>
    props.bottom &&
    Config(props).media[props.bottom]`
    align-items: flex-end;
  `}

  ${(props) =>
    props.around &&
    Config(props).media[props.around]`
    justify-content: space-around;
  `}

  ${(props) =>
    props.between &&
    Config(props).media[props.between]`
    justify-content: space-between;
  `}

  ${(props) =>
    props.first &&
    Config(props).media[props.first]`
    order: -1;
  `}

  ${(props) =>
    props.last &&
    Config(props).media[props.last]`
    order: 1;
  `}
`;

Row.displayName = "Row";

Row.propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: PropTypes.node,
};

export default Row;
