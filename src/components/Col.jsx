import PropTypes from "prop-types";
import styled from "styled-components";
import { isInteger } from "lodash";

import Config from "../config";

const { dimensions } = Config();

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const offsetProps = dimensions.map((d) => d + "Offset");
const DimensionPropTypes = dimensions.reduce((propTypes, dimension) => {
  propTypes[dimension] = ModificatorType;
  propTypes[dimension + "Offset"] = PropTypes.number;
  return propTypes;
}, {});

const Col = styled.div`
  position:relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-direction: column;
  min-height:1px;
  padding:0 ${(props) => Config(props).gutterWidth / 2}rem;
  ${(props) => props.flush && `padding: 0;`}

  ${(props) =>
    Object.keys(props)
      .filter((key) => ~dimensions.indexOf(key))
      .sort((key1, key2) => dimensions.indexOf(key1) - dimensions.indexOf(key2))
      .map(
        (key) =>
          Config(props).media[key]`
          ${
            isInteger(props[key])
              ? `
                flex-basis: ${(100 / Config(props).gridSize) * props[key]}%;
                max-width: ${(100 / Config(props).gridSize) * props[key]}%;
                display: flex;
                
              `
              : props[key]
              ? `
                flex-grow: 1;
                flex-basis: 0;
                max-width: 100%;
                display: flex;
              `
              : "display: none;"
          }`
      )}
      
  ${(props) =>
    Object.keys(props)
      .filter((key) => ~offsetProps.indexOf(key))
      .map(
        (key) =>
          Config(props).media[key.replace(/Offset$/, "")]`
            margin-left: ${(100 / Config(props).gridSize) * props[key]}%;
        `
      )}

  ${(props) =>
    props.reverse &&
    Config(props).media[props.reverse]`
      flex-direction: column-reverse;
    `}
  
  ${(props) =>
    props.start &&
    Config(props).media[props.start]`
    justify-content: flex-start;
  `}

  ${(props) =>
    props.middle &&
    Config(props).media[props.middle]`
    justify-content: center;
  `}

  ${(props) =>
    props.end &&
    Config(props).media[props.end]`
    justify-content: flex-end;
  `}

  ${(props) =>
    props.center &&
    Config(props).media[props.center]`
    align-items: center;
  `}

  ${(props) =>
    props.left &&
    Config(props).media[props.left]`
    align-items: flex-start;
  `}

  ${(props) =>
    props.right &&
    Config(props).media[props.right]`
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

Col.displayName = "Col";

Col.propTypes = {
  ...DimensionPropTypes,
  first: ModificatorType,
  last: ModificatorType,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Col;
