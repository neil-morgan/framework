import PropTypes from "prop-types";
import styled from "styled-components";

import config from "../config";

const { dimensions } = config();
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
    config(props).media[props.column]`
    flex-direction: column;
  `}

  ${(props) =>
    props.start &&
    config(props).media[props.start]`
    justify-content: flex-start;
  `}

  ${(props) =>
    props.center &&
    config(props).media[props.center]`
    justify-content: center;
  `}

  ${(props) =>
    props.end &&
    config(props).media[props.end]`
    justify-content: flex-end;
  `}

  ${(props) =>
    props.top &&
    config(props).media[props.top]`
    align-items: flex-start;
  `}

  ${(props) =>
    props.middle &&
    config(props).media[props.middle]`
    align-items: center;
  `}

  ${(props) =>
    props.bottom &&
    config(props).media[props.bottom]`
    align-items: flex-end;
  `}

  ${(props) =>
    props.around &&
    config(props).media[props.around]`
    justify-content: space-around;
  `}

  ${(props) =>
    props.between &&
    config(props).media[props.between]`
    justify-content: space-between;
  `}

  ${(props) =>
    props.first &&
    config(props).media[props.first]`
    order: -1;
  `}

  ${(props) =>
    props.last &&
    config(props).media[props.last]`
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
